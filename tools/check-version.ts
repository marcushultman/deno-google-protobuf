#!/usr/bin/env deno run -q --allow-read --allow-run

import { getVersion, getCurrentVersion } from './version.ts';

const version = await getVersion();

if (await getCurrentVersion() !== version) {
  console.log(`::set-output name=version::${version}`);
}
