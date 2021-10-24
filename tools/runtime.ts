#!/usr/bin/env deno run --allow-read --allow-write --allow-run

import * as path from 'https://deno.land/std/path/mod.ts';

const decoder = new TextDecoder('utf-8');
const encoder = new TextEncoder();

export default async function patchGoogleProtobuf(googleProtobufDir: string, dstDir: string) {
  await verifyRuntime(await patchRuntime(googleProtobufDir, dstDir));
}

export async function patchRuntime(srdDir: string, dstDir: string) {

  const fileName = 'google-protobuf.js';
  const fileIn = path.join(srdDir, fileName);
  const fileOut = path.join(dstDir, fileName);

  const src = await decoder.decode(await Deno.readFile(fileIn));
  const patchedSrc = src
    .replace(/getGlobal\(this\)/, 'getGlobal({Array,String})')
    .replace(/"object"===typeof exports&&\((.*)\);/, (_, exp) => exp.replace(/,/g, ';'))
    .replace(/;exports\./g, ';export const ');
  await Deno.writeFile(fileOut, encoder.encode(patchedSrc));

  return fileOut;
}

async function verifyRuntime(filePath: string) {
  const status = await Deno.run({ cmd: ['deno', 'run', filePath] }).status();
  if (status.code) {
    Deno.exit(status.code);
  }
}

if (import.meta.main) {
  if (Deno.args.length !== 2) {
    Deno.exit(1);
  }
  const [srcDir, dstDir] = Deno.args;
  await patchRuntime(srcDir, dstDir);
}

