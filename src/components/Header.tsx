import { Box, HStack, Link } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NAV_LINKS = [
	{ href: "#work", label: "Work" },
	{ href: "#resume", label: "Resume" },
	{ href: "#playlist", label: "Listening" },
] as const;

const navLinkStyle = {
	color: "var(--on-indigo-2)",
	textDecoration: "none",
	fontSize: "1rem",
	_hover: { color: "var(--on-indigo)", textDecoration: "underline" },
} as const;

const Header = () => {
	const headerRef = useRef<HTMLDivElement>(null);
	const prevScrollY = useRef<number>(0);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = (): void => {
			const currentScrollY = window.scrollY;
			if (headerRef.current) {
				const hide = currentScrollY > prevScrollY.current && currentScrollY > 80;
				headerRef.current.style.transform = hide
					? "translateY(-100%)"
					: "translateY(0)";
			}
			if (menuOpen) setMenuOpen(false);
			prevScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [menuOpen]);

	return (
		<Box
			as="header"
			ref={headerRef}
			position="fixed"
			top={0}
			left={0}
			right={0}
			zIndex={100}
			background="var(--indigo-900)"
			borderBottom="1px solid var(--rule-on-indigo)"
			transition="transform 0.35s var(--ease-out)">
			<Box maxWidth="var(--page-max)" marginX="auto" paddingX="var(--gutter)">
				<HStack height="4rem" justifyContent="space-between">
					<Link
						href="#top"
						fontFamily="var(--display)"
						fontWeight={760}
						fontSize="1.125rem"
						letterSpacing="-0.01em"
						color="var(--on-indigo)"
						textDecoration="none"
						style={{ fontStretch: "112%" }}
						_hover={{ textDecoration: "none" }}>
						Demi Sokoya
					</Link>

					<HStack as="nav" aria-label="Main" gap="2.25rem" hideBelow="md">
						{NAV_LINKS.map((item) => (
							<Link key={item.href} href={item.href} {...navLinkStyle}>
								{item.label}
							</Link>
						))}
						<Link
							href="#contact"
							color="var(--on-indigo)"
							fontSize="1rem"
							fontWeight={700}
							border="1.5px solid var(--on-indigo)"
							paddingX="1rem"
							paddingY="0.4rem"
							textDecoration="none"
							_hover={{
								background: "var(--on-indigo)",
								color: "var(--indigo-900)",
								textDecoration: "none",
							}}>
							Get in touch
						</Link>
					</HStack>

					<Box
						as="button"
						hideFrom="md"
						display="flex"
						alignItems="center"
						justifyContent="center"
						width="2.75rem"
						height="2.75rem"
						color="var(--on-indigo)"
						background="none"
						border="none"
						cursor="pointer"
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}
						aria-controls="mobile-nav"
						onClick={() => setMenuOpen((o) => !o)}>
						<FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
					</Box>
				</HStack>
			</Box>

			{menuOpen && (
				<Box
					as="nav"
					id="mobile-nav"
					aria-label="Main"
					hideFrom="md"
					borderTop="1px solid var(--rule-on-indigo)"
					background="var(--indigo-900)"
					paddingX="var(--gutter)"
					paddingY="0.5rem"
					display="flex"
					flexDirection="column">
					{[...NAV_LINKS, { href: "#contact", label: "Get in touch" }].map(
						(item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setMenuOpen(false)}
								{...navLinkStyle}
								fontSize="1.125rem"
								paddingY="0.875rem"
								borderBottom="1px solid var(--rule-on-indigo)">
								{item.label}
							</Link>
						),
					)}
				</Box>
			)}
		</Box>
	);
};

export default Header;
