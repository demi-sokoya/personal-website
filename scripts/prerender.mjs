// Injects the server-rendered page into dist/index.html after `vite build`.
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const htmlPath = `${root}dist/index.html`;
const ssrDir = `${root}dist-ssr`;

const { render } = await import(`${ssrDir}/entry-server.js`);
const template = await readFile(htmlPath, "utf8");
const marker = '<div id="root"></div>';

if (!template.includes(marker)) {
	throw new Error(`prerender: ${marker} not found in dist/index.html`);
}

await writeFile(htmlPath, template.replace(marker, `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });
console.log("prerender: wrote dist/index.html");
