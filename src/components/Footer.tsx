import { Box, Link } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box as="footer" background="var(--indigo-950)" color="var(--on-indigo-2)">
			<Box
				maxWidth="var(--page-max)"
				marginX="auto"
				paddingX="var(--gutter)"
				paddingY="1.75rem"
				display="flex"
				flexWrap="wrap"
				gap="1rem"
				justifyContent="space-between"
				alignItems="center"
				fontSize="1rem">
				<Box>© 2026 Demi Sokoya. Designed and built in Lagos.</Box>
				<Link
					href="#top"
					color="var(--on-indigo-2)"
					textDecoration="underline"
					_hover={{ color: "var(--on-indigo)" }}>
					Back to top
				</Link>
			</Box>
		</Box>
	);
};

export default Footer;
