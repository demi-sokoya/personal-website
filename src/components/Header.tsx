import { Box, HStack, Link, chakra } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NAV_LINKS = [
	{ href: "#work", label: "Work" },
	{ href: "#resume", label: "Resume" },
	{ href: "#playlist", label: "Listening" },
] as const;

const MOBILE_NAV_ID = "mobile-nav";

const navLinkStyle = {
	color: "var(--on-indigo-2)",
	textDecoration: "none",
	fontSize: "1rem",
	_hover: { color: "var(--on-indigo)", textDecoration: "underline" },
} as const;

const Header = () => {
	const headerRef = useRef<HTMLElement>(null);
	const menuRef = useRef<HTMLUListElement>(null);
	const prevScrollY = useRef<number>(0);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = (): void => {
			const currentScrollY = window.scrollY;
			const header = headerRef.current;
			if (header) {
				// The stylesheet only applies this while nothing inside has focus,
				// so a keyboard user tabbing back into the header always sees it
				const hide = currentScrollY > prevScrollY.current && currentScrollY > 80;
				header.toggleAttribute("data-scrolled-away", hide);
			}
			const menu = menuRef.current;
			if (menu?.matches(":is(:popover-open, .\\:popover-open)")) menu.hidePopover();
			prevScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Box
			as="header"
			ref={headerRef}
			className="site-header"
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

					{/* Phones: a native popover gives Escape, light dismiss and focus return */}
					<Box as="nav" aria-label="Main" hideFrom="md">
						<chakra.button
							type="button"
							popoverTarget={MOBILE_NAV_ID}
							aria-controls={MOBILE_NAV_ID}
							aria-label="Menu"
							display="flex"
							alignItems="center"
							justifyContent="center"
							width="2.75rem"
							height="2.75rem"
							color="var(--on-indigo)"
							background="none"
							border="none"
							cursor="pointer">
							<FontAwesomeIcon icon={menuOpen ? faXmark : faBars} aria-hidden />
						</chakra.button>

						<chakra.ul
							ref={menuRef}
							id={MOBILE_NAV_ID}
							popover="auto"
							onToggle={(e) =>
								setMenuOpen((e.nativeEvent as ToggleEvent).newState === "open")
							}
							listStyleType="none"
							css={{
								position: "fixed",
								inset: "auto",
								top: "4rem",
								left: 0,
								width: "100%",
								maxHeight: "calc(100dvh - 4rem)",
								overflow: "auto",
								margin: 0,
								border: "none",
								borderTop: "1px solid var(--rule-on-indigo)",
								borderBottom: "1px solid var(--rule-on-indigo)",
								background: "var(--indigo-900)",
								color: "var(--on-indigo)",
								paddingInline: "var(--gutter)",
								paddingBlock: "0.5rem",
								"&:is(:popover-open, .\\:popover-open)": {
									display: "flex",
									flexDirection: "column",
								},
								"&::backdrop": { background: "transparent" },
							}}>
							{[...NAV_LINKS, { href: "#contact", label: "Get in touch" }].map(
								(item, i, all) => (
									<li key={item.href}>
										<Link
											href={item.href}
											onClick={() => menuRef.current?.hidePopover()}
											{...navLinkStyle}
											display="block"
											fontSize="1.125rem"
											paddingY="0.875rem"
											borderBottom={
												i < all.length - 1
													? "1px solid var(--rule-on-indigo)"
													: undefined
											}>
											{item.label}
										</Link>
									</li>
								),
							)}
						</chakra.ul>
					</Box>
				</HStack>
			</Box>
		</Box>
	);
};

export default Header;
