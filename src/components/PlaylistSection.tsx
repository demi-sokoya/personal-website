import { Box } from "@chakra-ui/react";
import FullScreenSection from "@/components/FullScreenSection";
import ResistRule from "@/components/ResistRule";

const PlaylistSection = () => {
	return (
		<FullScreenSection id="playlist" field="cloth" paddingTop="0">
			<ResistRule seed={11} tone="var(--indigo-700)" marginBottom="var(--section-y)" />
			<Box
				display="grid"
				gridTemplateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }}
				columnGap="2rem"
				rowGap="2.5rem"
				alignItems="center">
				<Box gridColumn={{ lg: "1 / 6" }}>
					<Box
						as="h2"
						fontSize="clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)"
						fontWeight={740}
						letterSpacing="-0.025em"
						lineHeight={1.1}
						marginBottom="1rem">
						Currently listening
					</Box>
					<Box
						as="p"
						fontSize="1.125rem"
						lineHeight={1.6}
						color="var(--ink-2)"
						maxWidth="28rem">
						Somehow Florence + the Machine and Wizkid ended up in the same
						playlist. It works. I don't question it.
					</Box>
				</Box>

				<Box gridColumn={{ lg: "7 / 13" }}>
					<iframe
						data-testid="embed-iframe"
						title="Spotify playlist: Currently listening"
						style={{ border: 0, display: "block" }}
						src="https://open.spotify.com/embed/playlist/7sPvRANlNjd2pqWM4J74my?utm_source=generator&theme=0"
						width="100%"
						height="352"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"></iframe>
				</Box>
			</Box>
		</FullScreenSection>
	);
};

export default PlaylistSection;
