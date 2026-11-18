import { Box, type BoxProps } from "@chakra-ui/react";
import { wobblyLine } from "./resist";

interface ResistRuleProps extends BoxProps {
	seed?: number;
	/** Line colour; defaults to the current text colour */
	tone?: string;
}

/** A hand-painted dividing line, used where one section hands over to the next. */
const ResistRule = ({ seed = 3, tone = "currentColor", ...boxProps }: ResistRuleProps) => (
	<Box aria-hidden="true" height="10px" {...boxProps}>
		<svg
			viewBox="0 0 1000 10"
			preserveAspectRatio="none"
			width="100%"
			height="10"
			style={{ display: "block", overflow: "visible" }}>
			<path
				d={wobblyLine(0, 5, 1000, 5, seed, 2.2)}
				fill="none"
				stroke={tone}
				strokeWidth={2}
				strokeLinecap="round"
				vectorEffect="non-scaling-stroke"
			/>
		</svg>
	</Box>
);

export default ResistRule;
