import { Box } from "@chakra-ui/react";
import AdirePattern from "./components/AdirePattern";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PlaylistSection from "./components/PlaylistSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import ResumeSection from "./components/ResumeSection";

/**
 * A strip of the hero's mirrored adire field marking a seam between
 * sections. Two tiles tall, so shapes close up across the middle seam.
 * Tile size tracks the hero: 20 across the column on desktop (the hero's
 * 8 x 8 field spans five twelfths of it), 8 across on phones (the same
 * count as the hero strip).
 */
const PatternBand = () => (
	<Box background="var(--indigo-900)">
		<Box maxWidth="var(--page-max)" marginX="auto" paddingX="var(--gutter)">
			<AdirePattern
				columns={20}
				rows={2}
				hideBelow="lg"
				border="1px solid var(--rule-on-indigo)"
			/>
			<AdirePattern
				columns={8}
				rows={2}
				hideFrom="lg"
				border="1px solid var(--rule-on-indigo)"
			/>
		</Box>
	</Box>
);

function App() {
	return (
		<>
			<a className="skip-link" href="#work">
				Skip to work
			</a>
			<Header />
			<main>
				<HeroSection />
				<ProjectsSection />
				<PatternBand />
				<ResumeSection />
				<PlaylistSection />
				<PatternBand />
				<ContactSection />
			</main>
			<PatternBand />
			<Footer />
		</>
	);
}

export default App;
