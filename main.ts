// One Word, First Thought — writes exactly one word to /output/entry.txt.
//
// The word is the first thought: quicksilver. A liquid metal that will not
// sit still, and a temper that will not either — vivid, surprising, and
// gone before you can pin it down.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "quicksilver";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Read-back self-check: the file must hold exactly one word, 1-24 chars.
const written = readFileSync("/output/entry.txt", "utf8");
const chars = [...written];
if (!/^\S+$/.test(written) || chars.length < 1 || chars.length > 24) {
  throw new Error(
    `entry.txt failed the gate: ${JSON.stringify(written)} (${chars.length} chars)`,
  );
}
