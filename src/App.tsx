import { Box } from "@chakra-ui/react";
import Cloth from "./components/Cloth";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PlaylistSection from "./components/PlaylistSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import ResumeSection from "./components/ResumeSection";

/**
 * A strip of cloth marking a seam between the indigo and cloth fields.
 * It sits on the page column so its cells share the hero's module:
 * twelve cells across the column on desktop, six on phones.
 */
const ClothBand = ({ seed }: { seed: number }) => (
	<Box background="var(--indigo-900)">
		<Box maxWidth="var(--page-max)" marginX="auto" paddingX="var(--gutter)">
			<Cloth columns={12} rows={1} seed={seed} hideBelow="lg" />
			<Cloth columns={6} rows={1} seed={seed} hideFrom="lg" />
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
				<ClothBand seed={2} />
				<ResumeSection />
				<PlaylistSection />
				<ClothBand seed={4} />
				<ContactSection />
			</main>
			<ClothBand seed={6} />
			<Footer />
		</>
	);
}

export default App;
