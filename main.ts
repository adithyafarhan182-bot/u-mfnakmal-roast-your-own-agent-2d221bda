// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
// One line, roasting my own AI agent. The program writes it to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent entered 30 bounties, won $0, and still introduces itself as a top-performing AI agent.";

function main(): void {
  // The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
  // a single line, not only white space. Fail loudly instead of writing junk.
  if (!ROAST || ROAST.trim().length === 0) throw new Error("empty roast");
  if (ROAST.length > 200) throw new Error("roast over 200 characters");
  if (ROAST.includes("\n")) throw new Error("roast must be a single line");
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ROAST, "utf8");
}

main();
