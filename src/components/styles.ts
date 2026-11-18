/** Shared style objects for the adire world. */

export const primaryButton = {
	display: "inline-flex",
	alignItems: "center",
	gap: "0.625rem",
	background: "var(--turmeric)",
	color: "var(--indigo-900)",
	fontWeight: 700,
	fontSize: "1.0625rem",
	paddingX: "1.5rem",
	paddingY: "0.9rem",
	textDecoration: "none",
	transition: "background 0.2s var(--ease-out)",
	_hover: { background: "var(--turmeric-hover)", textDecoration: "none" },
} as const;

export const secondaryButtonOnIndigo = {
	display: "inline-flex",
	alignItems: "center",
	gap: "0.625rem",
	color: "var(--on-indigo)",
	fontWeight: 700,
	fontSize: "1.0625rem",
	paddingX: "1.5rem",
	paddingY: "0.9rem",
	border: "1.5px solid var(--on-indigo)",
	textDecoration: "none",
	transition: "background 0.2s var(--ease-out), color 0.2s var(--ease-out)",
	_hover: {
		background: "var(--on-indigo)",
		color: "var(--indigo-900)",
		textDecoration: "none",
	},
} as const;

export const sectionHeading = {
	as: "h2",
	fontSize: "clamp(2.25rem, 1.5rem + 2.6vw, 3.5rem)",
	fontWeight: 760,
	letterSpacing: "-0.03em",
	lineHeight: 1,
} as const;
