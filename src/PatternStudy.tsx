import { Box } from "@chakra-ui/react";
import AdirePattern from "@/components/AdirePattern";

/** A standalone study page for the mirrored adire tile, separate from the site. */
const PatternStudy = () => (
	<Box
		as="main"
		maxWidth="var(--page-max)"
		marginX="auto"
		paddingX="var(--gutter)"
		paddingY="4rem"
		display="grid"
		gridTemplateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }}
		columnGap="3rem"
		rowGap="3rem"
		alignItems="start">
		<Box gridColumn={{ lg: "1 / 5" }}>
			<Box
				as="h1"
				fontSize="clamp(2rem, 1.4rem + 2vw, 3rem)"
				fontWeight={760}
				letterSpacing="-0.03em"
				lineHeight={1}
				marginBottom="1.25rem">
				One tile, mirrored
			</Box>
			<Box as="p" color="var(--on-indigo-2)" fontSize="1.0625rem" marginBottom="2.5rem">
				Each tile is flipped left to right from its neighbour in the row and top to
				bottom from its neighbour in the column. Shapes drawn against an edge close
				up with their reflection, so quarter rings become rings and half leaves
				become leaves.
			</Box>

			<Box as="h2" fontSize="1.25rem" fontWeight={720} marginBottom="0.75rem">
				The tile
			</Box>
			<AdirePattern size={1} maxWidth="10rem" marginBottom="2.5rem" />

			<Box as="h2" fontSize="1.25rem" fontWeight={720} marginBottom="0.75rem">
				Two by two, seams shown
			</Box>
			<AdirePattern size={2} showSeams maxWidth="20rem" />
		</Box>

		<Box gridColumn={{ lg: "5 / 13" }}>
			<AdirePattern size={8} />
		</Box>
	</Box>
);

export default PatternStudy;
