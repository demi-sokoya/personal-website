import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/atkinson-hyperlegible-next/index.css";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider.tsx";

// The mobile menu is a native popover; older browsers get the polyfill
if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
	import("@oddbird/popover-polyfill");
}

const container = document.getElementById("root")!;
const app = (
	<StrictMode>
		<Provider>
			<App />
		</Provider>
	</StrictMode>
);

// Production HTML is prerendered at build time (scripts/prerender.mjs);
// the dev server serves an empty root
if (container.hasChildNodes()) {
	hydrateRoot(container, app);
} else {
	createRoot(container).render(app);
}
