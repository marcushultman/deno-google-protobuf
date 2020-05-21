#!/usr/bin/env deno run --allow-read --allow-write

import * as path from 'https://deno.land/std/path/mod.ts';
import { walk } from 'https://deno.land/std/fs/walk.ts';

const decoder = new TextDecoder('utf-8');
const encoder = new TextEncoder();

/**
 * Takes all `srcDir/**_pb.js` files and make fix import of the google-protobuf
 * runtime, as well as imports and exports of other messages.
 *
 * @param srcDir source directory
 * @param dstDir destination directory
 */
export default async function patchGeneratedProtos(srcDir: string, dstDir: string, version?: string){
  const versionSuffix = version ? `@${version}` : '';
  const runtimeBase = `https://deno.land/x/deno_google_protobuf${versionSuffix}`;

  for await (const entry of walk(srcDir, { match: [/_pb.js$/], includeDirs: false })) {
    const src = await decoder.decode(await Deno.readFile(entry.path));
    const exports = [...src.matchAll(/goog.exportSymbol\('(.*)', null, global\);/g)].map(m => m[1]);

    const patchedSrc = src
      .replace(
        /var (.*) = require\('google-protobuf'\);/g,
        (_, importName, importPath) => `import * as ${importName} from '${runtimeBase}/google-protobuf.js'`
      )
      .replace(
        /var (.*) = require\('google-protobuf\/(.*)'\);/g,
        (_, importName, importPath) => `import * as ${importName} from '${runtimeBase}/${importPath}'`
      )
      .replace(
        /var (.*) = require\('(.*_pb.js)'\);/g,
        (_, importName, importPath) => insertImport(entry.path, importName, importPath)
      )
      .replace(
        /goog.object.extend\(exports, (.*)\);/g,
        (_, prefix) => insertExports(exports, prefix)
      )
      .replace(
        /(@template T\n(?:.+\n)*((.+)\.prototype[^\s]*).*\n(?:.+\n)*)/g,
        (_, fnDef, fn, type) => patchJSDocTemplate(fnDef, fn, type)
      );

    const outFile = path.join(dstDir, path.relative(srcDir, entry.path));

    await Deno.mkdir(path.dirname(outFile), { recursive: true });
    await Deno.writeFile(outFile, encoder.encode(patchedSrc));
  };
}

function insertImport(entryPath: string, importName: string, importPath: string) {
  const entryDir = path.dirname(entryPath);
  const relativePath = path.relative(entryDir, path.join(entryDir, importPath));
  const prefix = relativePath.startsWith('.') ? '' : './';
  return `import * as ${importName} from '${prefix}${relativePath}'`;
}

function insertExports(exports: string[], prefix: string) {
  return exports
    .filter(path => path.startsWith(prefix))
    .map(path => [path, path.substring(prefix.length + 1)])
    .filter(([_, name]) => !name.includes('.'))
    .map(([path, name]) => `export const ${name} = ${path};`)
    .join('\n');
}

function patchJSDocTemplate(fnDef: string, fn: string, type: string) {
  const fnName = fn.replace(/\./g, '_');
  return `@this ${type}\n * ${fnDef.replace(fn, `const ${fnName}`)}\n${fn} = ${fnName};`;
}

if (import.meta.main) {
  if (!Deno.args.length) {
    console.error('$ ./build.ts <srcDir> <dstDir?> <version?>');
    Deno.exit(1);
  }
  const [srcDir, dstDir] = Deno.args.length === 1 ? Array(2).fill(Deno.args[0]) : Deno.args;
  const version = Deno.args.length >= 3 ? Deno.args[2] : undefined;
  await patchGeneratedProtos(srcDir, dstDir, version);
}
