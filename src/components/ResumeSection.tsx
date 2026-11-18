import FullScreenSection from "@/components/FullScreenSection";
import { primaryButton, sectionHeading } from "@/components/styles";
import { skills } from "@/data";
import { Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ResumeSection = () => {
	return (
		<FullScreenSection
			id="resume"
			field="cloth"
			display="grid"
			gridTemplateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }}
			columnGap="2rem"
			rowGap="3.5rem">
			<Box gridColumn={{ lg: "1 / 6" }}>
				<Box {...sectionHeading} marginBottom="1.5rem">
					Resume
				</Box>
				<Box
					as="p"
					fontSize="1.125rem"
					lineHeight={1.6}
					color="var(--ink-2)"
					marginBottom="2.25rem"
					maxWidth="26rem">
					Front-end developer and UX designer. PDF, updated September 2026.
				</Box>
				<Link href="/demi_sokoya_resume.pdf" download {...primaryButton}>
					<FontAwesomeIcon icon={faDownload} />
					Download resume
				</Link>
			</Box>

			<Box gridColumn={{ lg: "7 / 13" }}>
				<Box
					as="h3"
					fontSize="1.5rem"
					fontWeight={720}
					letterSpacing="-0.015em"
					marginBottom="1.25rem">
					Skills and tools
				</Box>
				<Box
					as="ul"
					listStyleType="none"
					display="grid"
					gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
					columnGap="2rem"
					borderBottom="1px solid var(--rule-on-cloth)">
					{skills.map((skill) => (
						<Box
							as="li"
							key={skill}
							fontSize="1.0625rem"
							paddingY="0.75rem"
							borderTop="1px solid var(--rule-on-cloth)">
							{skill}
						</Box>
					))}
				</Box>
			</Box>
		</FullScreenSection>
	);
};

export default ResumeSection;
