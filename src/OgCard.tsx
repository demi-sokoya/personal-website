import { Box } from "@chakra-ui/react";
import AdirePattern from "@/components/AdirePattern";

/*
 * The social preview card, 1200 x 630. Rendered on the dev server at
 * /og.html and screenshotted into public/og-image.png; it is not part of
 * the site build. It echoes the hero: the headline on the indigo ground
 * on the left, and a full-height panel of the mirrored adire field on the
 * right (6 x 8 tiles, close to the hero's tile size at this scale).
 */
const OgCard = () => (
	<Box
		width="1200px"
		height="630px"
		overflow="hidden"
		position="relative"
		background="var(--indigo-900)"
		color="var(--on-indigo)"
		display="flex">
		<Box
			flex={1}
			paddingLeft="80px"
			paddingRight="64px"
			display="flex"
			flexDirection="column"
			justifyContent="center">
			<Box
				fontFamily="var(--display)"
				fontWeight={760}
				fontSize="30px"
				letterSpacing="-0.01em"
				color="var(--on-indigo-2)"
				marginBottom="24px"
				style={{ fontStretch: "112%" }}>
				Demi Sokoya
			</Box>
			<Box
				as="h1"
				fontSize="76px"
				fontWeight={780}
				lineHeight={0.98}
				letterSpacing="-0.035em"
				marginBottom="32px">
				I design interfaces, then build them myself.
			</Box>
			<Box
				fontSize="28px"
				lineHeight={1.35}
				color="var(--on-indigo-2)"
				style={{ textWrap: "balance" }}>
				Front-end developer and UX designer, based in Lagos.
			</Box>
		</Box>

		<AdirePattern
			columns={6}
			rows={8}
			height="630px"
			width="472.5px"
			flexShrink={0}
			borderLeft="1px solid var(--rule-on-indigo)"
		/>
	</Box>
);

export default OgCard;
