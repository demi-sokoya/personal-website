import type { Project } from "@/data";
import { Box, Image, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectEntryProps {
	project: Project;
	/** The lead project gets the wider plate */
	lead?: boolean;
	/** Put the screenshot on the right */
	flip?: boolean;
}

const ledgerRow = {
	display: "grid",
	gridTemplateColumns: "7.5rem 1fr",
	gap: "1rem",
	paddingY: "0.75rem",
	borderTop: "1px solid var(--rule-on-indigo)",
	fontSize: "1rem",
} as const;

const entryLink = {
	display: "inline-flex",
	alignItems: "center",
	gap: "0.5rem",
	color: "var(--on-indigo)",
	fontWeight: 700,
	textDecoration: "underline",
	textDecorationThickness: "1px",
	_hover: { textDecorationThickness: "3px" },
} as const;

const yearOf = (tag: string) => tag.match(/\d{4}/)?.[0] ?? tag;
const hostOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const ProjectEntry = ({ project, lead = false, flip = false }: ProjectEntryProps) => {
	const plateCols = lead ? { lg: "1 / 8" } : flip ? { lg: "7 / 13" } : { lg: "1 / 7" };
	const textCols = lead ? { lg: "8 / 13" } : flip ? { lg: "1 / 6" } : { lg: "8 / 13" };

	return (
		<Box
			as="article"
			display="grid"
			gridTemplateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }}
			columnGap="2rem"
			rowGap="2rem"
			alignItems="center">
			{/* The screenshot is shown whole, on a strip of undyed cloth, named beneath */}
			<Box
				as="figure"
				gridColumn={plateCols}
				gridRow={{ lg: 1 }}
				background="var(--cloth)"
				color="var(--ink-2)"
				padding={{ base: "0.625rem", md: "1rem" }}
				paddingBottom={{ base: "0.75rem", md: "0.875rem" }}>
				<Image
					src={project.imageSrc}
					alt={`Screenshot of ${project.title}`}
					htmlWidth={project.imageWidth}
					htmlHeight={project.imageHeight}
					width="100%"
					height="auto"
					display="block"
					loading="lazy"
				/>
				<Box
					as="figcaption"
					marginTop={{ base: "0.75rem", md: "0.875rem" }}
					fontSize="1rem"
					wordBreak="break-word">
					{hostOf(project.live)}
				</Box>
			</Box>

			<Box gridColumn={textCols} gridRow={{ lg: 1 }}>
				<Box
					as="h3"
					fontSize={lead ? "clamp(2rem, 1.4rem + 2vw, 2.75rem)" : "clamp(1.75rem, 1.3rem + 1.4vw, 2.25rem)"}
					fontWeight={760}
					letterSpacing="-0.025em"
					lineHeight={1.05}
					marginBottom="1rem">
					{project.title}
				</Box>
				<Box
					as="p"
					fontSize="1.0625rem"
					color="var(--on-indigo-2)"
					lineHeight={1.6}
					marginBottom="1.75rem"
					maxWidth="34rem">
					{project.desc}
				</Box>

				<Box as="dl" borderBottom="1px solid var(--rule-on-indigo)">
					<Box {...ledgerRow}>
						<Box as="dt" color="var(--on-indigo-2)">
							Year
						</Box>
						<Box as="dd">{yearOf(project.tag)}</Box>
					</Box>
					<Box {...ledgerRow}>
						<Box as="dt" color="var(--on-indigo-2)">
							Built with
						</Box>
						<Box as="dd">{project.stack.join(", ")}</Box>
					</Box>
					<Box {...ledgerRow}>
						<Box as="dt" color="var(--on-indigo-2)">
							See it
						</Box>
						<Box as="dd" display="flex" flexWrap="wrap" columnGap="1.5rem" rowGap="0.5rem">
							<Link href={project.live} target="_blank" rel="noreferrer" {...entryLink}>
								Live site
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
								<Box as="span" srOnly>
									(opens in a new tab)
								</Box>
							</Link>
							<Link href={project.repo} target="_blank" rel="noreferrer" {...entryLink}>
								<FontAwesomeIcon icon={faGithub} />
								Source
								<Box as="span" srOnly>
									(opens in a new tab)
								</Box>
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default ProjectEntry;
