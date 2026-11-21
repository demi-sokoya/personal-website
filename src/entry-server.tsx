import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider.tsx";

/** Renders the page to HTML at build time, so it paints before any JS runs. */
export function render(): string {
	return renderToString(
		<StrictMode>
			<Provider>
				<App />
			</Provider>
		</StrictMode>,
	);
}
