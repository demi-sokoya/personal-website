import { Box, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface FullScreenSectionProps extends BoxProps {
	children: ReactNode;
	/** Which ground the section sits on: indigo dye or undyed cloth */
	field?: "indigo" | "cloth";
}

/** A full-bleed band holding a centred page column. */
const FullScreenSection = ({
	children,
	field = "indigo",
	id,
	...boxProps
}: FullScreenSectionProps) => (
	<Box
		as="section"
		id={id}
		className={field === "cloth" ? "on-cloth" : undefined}
		background={field === "cloth" ? "var(--cloth)" : "var(--indigo-900)"}
		color={field === "cloth" ? "var(--ink)" : "var(--on-indigo)"}>
		<Box
			maxWidth="var(--page-max)"
			marginX="auto"
			paddingX="var(--gutter)"
			paddingY="var(--section-y)"
			{...boxProps}>
			{children}
		</Box>
	</Box>
);

export default FullScreenSection;
