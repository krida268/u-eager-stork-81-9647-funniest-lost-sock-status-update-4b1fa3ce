// Funniest Lost Sock Status Update — a lost sock reporting from inside the fridge.
// The sock ended up somewhere it should not be: day 3 in the fridge, where the
// leftovers ignore it, the light only visits, and nobody has feet.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Day 3 in the fridge. The leftovers ignore me, the light leaves when the door shuts, and nobody here has feet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
