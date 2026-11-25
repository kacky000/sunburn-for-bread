import { mkdirSync, writeFileSync } from "node:fs";

// Line 1 explains a toaster to a 10-year-old; line 2 says what the analogy maps and what it leaves out.
const lines = [
  "A toaster is a tiny indoor sun for bread: its wires glow red like a little sun and give the slice a sunburn that turns its outside brown while its inside stays soft.",
  "It maps the glowing wires to the sun and the crust to a tan that only reaches the surface, but leaves out that bread browns because its sugars cook into new flavours, not because it gets hurt.",
];
const text = lines.join("\n");

const chars = [...text].length;
if (chars < 1 || chars > 400) throw new Error(`entry is ${chars} characters; the limit is 400`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text);
