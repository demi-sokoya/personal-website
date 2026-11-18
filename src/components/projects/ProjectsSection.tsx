import { projects, type GhostCard, type Project } from "@/data";
import FullScreenSection from "../FullScreenSection";
import { Box } from "@chakra-ui/react";
import ProjectEntry from "./ProjectEntry";
import { sectionHeading } from "@/components/styles";

function isGhostCard(item: Project | GhostCard): item is GhostCard {
	return (item as GhostCard).ghost === true;
}

const featured = projects.find(
	(p): p is Project => !isGhostCard(p) && p.featured,
);
const regular = projects.filter(
	(p): p is Project => !isGhostCard(p) && !p.featured,
);
const ghosts = projects.filter(isGhostCard);

const ProjectsSection = () => {
	return (
		<FullScreenSection id="work" paddingTop={{ base: "3rem", md: "4rem" }}>
			<Box
				display="flex"
				flexWrap="wrap"
				alignItems="baseline"
				justifyContent="space-between"
				gap="1rem"
				paddingTop="2rem"
				borderTop="1px solid var(--rule-on-indigo)"
				marginBottom={{ base: "3rem", md: "4.5rem" }}>
				<Box {...sectionHeading}>Selected work</Box>
				<Box as="p" color="var(--on-indigo-2)" fontSize="1.0625rem">
					Each one designed and built by me.
				</Box>
			</Box>

			<Box display="flex" flexDirection="column" gap={{ base: "4.5rem", md: "7rem" }}>
				{featured && <ProjectEntry project={featured} lead />}
				{regular.map((p, i) => (
					<ProjectEntry key={p.id} project={p} flip={i % 2 === 0} />
				))}
			</Box>

			{ghosts.map((g, i) => (
				<Box
					key={`ghost-${i}`}
					marginTop={{ base: "4.5rem", md: "6rem" }}
					paddingY="1.25rem"
					borderTop="1px dashed var(--rule-on-indigo)"
					borderBottom="1px dashed var(--rule-on-indigo)"
					color="var(--on-indigo-2)"
					fontSize="1.0625rem">
					Next project: {g.label.toLowerCase()}.
				</Box>
			))}
		</FullScreenSection>
	);
};

export default ProjectsSection;
