import * as path from "https://deno.land/std/path/mod.ts";

const root = path.dirname(path.dirname(import.meta.url.replace(/^file:\/\//, '')));
const packageFile = path.join(root, 'node_modules', 'google-protobuf', 'package.json');

const decoder = new TextDecoder('utf-8');

export async function getVersion() {
  const { version } = JSON.parse(decoder.decode(await Deno.readFile(packageFile)));
  return version as string;
}

export async function getCurrentVersion() {
  const process = Deno.run({ cmd: ['git', 'describe', '--tags', '--abbrev=0'], stderr: 'piped', stdout: 'piped' });
  const status = await process.status();
  return status.success ? decoder.decode(await process.output()).trim() : null;
}
