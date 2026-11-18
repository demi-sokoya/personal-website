import { Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import AdirePattern from "@/components/AdirePattern";
import { primaryButton, secondaryButtonOnIndigo } from "@/components/styles";

/*
 * The hero runs on the page's twelve-column module with no gutter between
 * columns. The right five columns hold the mirrored adire field.
 */
const HeroSection = () => {
	return (
		<Box as="section" id="top" background="var(--indigo-900)">
			<Box
				maxWidth="var(--page-max)"
				marginX="auto"
				paddingX="var(--gutter)"
				paddingTop={{ base: "7.5rem", md: "9rem" }}
				paddingBottom={{ base: "4rem", md: "5.5rem" }}
				display="grid"
				gridTemplateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }}
				rowGap="3rem"
				alignItems="center">
				<Box gridColumn={{ lg: "1 / 8" }} paddingRight={{ lg: "3.5rem" }}>
					<Box
						as="h1"
						fontSize="clamp(2.5rem, 1.2rem + 4vw, 4.75rem)"
						fontWeight={780}
						lineHeight={0.98}
						letterSpacing="-0.035em"
						marginBottom="2rem">
						I design interfaces, then build them myself.
					</Box>

					<Box
						as="p"
						fontSize={{ base: "1.125rem", md: "1.25rem" }}
						lineHeight={1.55}
						color="var(--on-indigo-2)"
						maxWidth="34rem"
						marginBottom="2.75rem">
						Front-end developer and UX designer, based in Lagos. I design in
						Figma and ship the same interface in React, so nothing gets lost
						between the two.
					</Box>

					<Box
						display="flex"
						flexDirection={{ base: "column", sm: "row" }}
						flexWrap="wrap"
						gap="1rem">
						<Link href="#work" {...primaryButton} justifyContent="center">
							See the work
							<FontAwesomeIcon icon={faArrowDown} />
						</Link>
						<Link
							href="/demi_sokoya_resume.pdf"
							download
							{...secondaryButtonOnIndigo}
							justifyContent="center">
							<FontAwesomeIcon icon={faDownload} />
							Download resume
						</Link>
					</Box>
				</Box>

				{/* The mirrored adire field: one tile, flipped across an 8 x 8 grid */}
				<Box gridColumn={{ lg: "8 / 13" }} hideBelow="lg">
					<AdirePattern size={8} border="1px solid var(--rule-on-indigo)" />
				</Box>
				<AdirePattern
					columns={8}
					rows={4}
					hideFrom="lg"
					border="1px solid var(--rule-on-indigo)"
				/>
			</Box>
		</Box>
	);
};

export default HeroSection;
