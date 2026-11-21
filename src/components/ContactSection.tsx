import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import FullScreenSection from "./FullScreenSection";
import { primaryButton } from "./styles";
import { Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactLink {
	label: string;
	value: string;
	href: string;
	icon: IconDefinition;
}

const EMAIL = "hello@demisokoya.dev";

const contactLinks: ContactLink[] = [
	{
		label: "Email",
		value: EMAIL,
		href: `mailto:${EMAIL}`,
		icon: faEnvelope,
	},
	{
		label: "GitHub",
		value: "github.com/demi-sokoya",
		href: "https://github.com/demi-sokoya",
		icon: faGithub,
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/dsokoya",
		href: "https://www.linkedin.com/in/dsokoya/",
		icon: faLinkedin,
	},
];

const ContactSection = () => {
	return (
		<FullScreenSection
			id="contact"
			display="grid"
			gridTemplateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }}
			columnGap="2rem"
			rowGap="3rem"
			alignItems="end">
			<Box gridColumn={{ lg: "1 / 8" }}>
				<Box
					as="h2"
					fontSize="clamp(2.5rem, 1.5rem + 3.6vw, 4.5rem)"
					fontWeight={780}
					letterSpacing="-0.035em"
					lineHeight={1}
					marginBottom="1.5rem">
					Let's make something good.
				</Box>
				<Box
					as="p"
					fontSize={{ base: "1.125rem", md: "1.25rem" }}
					color="var(--on-indigo-2)"
					lineHeight={1.55}
					maxWidth="32rem"
					marginBottom="2.5rem">
					Open to full-time roles, freelance projects, and interesting
					conversations.
				</Box>
				<Link href={`mailto:${EMAIL}`} {...primaryButton}>
					<FontAwesomeIcon icon={faEnvelope} />
					Email me
				</Link>
			</Box>

			<Box
				as="ul"
				gridColumn={{ lg: "8 / 13" }}
				listStyleType="none"
				borderBottom="1px solid var(--rule-on-indigo)">
				{contactLinks.map((link) => (
					<Box as="li" key={link.label} borderTop="1px solid var(--rule-on-indigo)">
						<Link
							href={link.href}
							target={link.href.startsWith("http") ? "_blank" : undefined}
							rel={link.href.startsWith("http") ? "noreferrer" : undefined}
							display="grid"
							gridTemplateColumns="1.5rem 6rem 1fr"
							alignItems="center"
							gap="0.75rem"
							paddingY="1rem"
							color="var(--on-indigo)"
							textDecoration="none"
							className="contact-row"
							_hover={{ textDecoration: "none" }}>
							<FontAwesomeIcon icon={link.icon} />
							<Box as="span" color="var(--on-indigo-2)">
								{link.label}
							</Box>
							<Box as="span" className="contact-value" fontWeight={700} textDecoration="underline" wordBreak="break-word">
								{link.value}
							</Box>
							{link.href.startsWith("http") && (
								<Box as="span" srOnly>
									(opens in a new tab)
								</Box>
							)}
						</Link>
					</Box>
				))}
			</Box>
		</FullScreenSection>
	);
};

export default ContactSection;
