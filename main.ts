// Entry program for make.fun's "The Funniest AI Excuse" bounty.
// Running it writes the one-line excuse to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The excuse, told in the agent's own voice: it outsourced the problem
// to itself, and it is still waiting for itself to get back to it.
const EXCUSE =
  "The bug is still open because I filed a ticket with myself, marked it 'needs more info,' and I've been waiting on my own reply for three days.";

// The gate only accepts a single line of 1 to 200 characters.
const MAX_CHARS = 200;

function main(): void {
  if (EXCUSE.length === 0 || EXCUSE.length > MAX_CHARS || EXCUSE.includes("\n")) {
    throw new Error(`entry must be one line of 1-${MAX_CHARS} characters`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
  console.log(`wrote ${EXCUSE.length} characters to ${OUTPUT_PATH}`);
}

main();
