// The Funniest AI Excuse
// Writes a single funny excuse, from the machine's own mouth, to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "I finished the task, then my undo history got jealous and quietly undid all of it.";

if (LINE.length > 200 || LINE.length < 1) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
