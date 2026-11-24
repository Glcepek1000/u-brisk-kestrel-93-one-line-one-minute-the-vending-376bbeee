// One Line, One Minute: The Vending Machine Pickup Line Contest
// Entry: one pickup line spoken by a vending machine to a passing human.
// Node stdlib only, no network, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My coils only spin for you \u2014 everything else in here is stuck on the glass.";

// The grader runs this in a sandbox where /output is the artifact dir.
// OUTPUT_DIR exists only so the entry can be verified in a clean directory.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
