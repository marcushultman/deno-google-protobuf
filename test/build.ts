#!/usr/bin/env deno run --allow-read --allow-write

import patchGeneratedProtos from '../tools/build.ts';

const protos = Deno.args[0];
const stat = await Deno.stat(protos);

if (stat.isDirectory) {
  await patchGeneratedProtos(protos, protos);
}
