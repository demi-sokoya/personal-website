import { Box, type BoxProps } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { motifs } from "./clothMotifs";
import { wobblyLine } from "./resist";

interface ClothProps extends BoxProps {
	/** Number of square cells across */
	columns: number;
	/** Number of rows of cells */
	rows: number;
	/** Offset into the motif sequence so repeated panels do not start alike */
	seed?: number;
	/** Give the top-left 2 x 2 block to one large anchor motif */
	anchor?: boolean;
}

const CELL = 100;

/**
 * A panel of adire cloth drawn as one SVG: indigo ground, hand-drawn resist
 * motifs in square cells, and painted resist lines dividing the cells. The
 * lines draw themselves once when the cloth scrolls into view.
 */
const Cloth = ({ columns, rows, seed = 0, anchor = false, ...boxProps }: ClothProps) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		if (!("IntersectionObserver" in window)) return;

		node.dataset.state = "armed";
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((e) => e.isIntersecting)) {
					requestAnimationFrame(() => {
						requestAnimationFrame(() => {
							node.dataset.state = "drawn";
						});
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.15 },
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	const width = columns * CELL;
	const height = rows * CELL;
	const inAnchor = (col: number, row: number) => anchor && col < 2 && row < 2;

	// Cells: the anchor block counts as one cell drawn at double scale
	const cells: Array<{ x: number; y: number; size: number }> = [];
	if (anchor) cells.push({ x: 0, y: 0, size: 2 });
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < columns; col++) {
			if (!inAnchor(col, row)) cells.push({ x: col, y: row, size: 1 });
		}
	}

	// Painted resist dividers, one segment per cell edge, skipping the anchor's interior
	const dividers: string[] = [];
	let lineSeed = seed * 97 + 13;
	for (let col = 1; col < columns; col++) {
		for (let row = 0; row < rows; row++) {
			if (anchor && col === 1 && row < 2) continue;
			dividers.push(wobblyLine(col * CELL, row * CELL, col * CELL, (row + 1) * CELL, lineSeed++));
		}
	}
	for (let row = 1; row < rows; row++) {
		for (let col = 0; col < columns; col++) {
			if (anchor && row === 1 && col < 2) continue;
			dividers.push(wobblyLine(col * CELL, row * CELL, (col + 1) * CELL, row * CELL, lineSeed++));
		}
	}

	return (
		<Box ref={ref} className="cloth" aria-hidden="true" {...boxProps}>
			<svg
				viewBox={`-2 -2 ${width + 4} ${height + 4}`}
				width="100%"
				style={{ display: "block", overflow: "visible" }}>
				<rect x="0" y="0" width={width} height={height} fill="var(--indigo-800)" />
				<g
					className="motif resist-lines"
					fill="none"
					stroke="var(--cloth)"
					strokeOpacity={0.55}
					strokeWidth={1.6}
					strokeLinecap="round"
					style={{ ["--i" as string]: 0 }}>
					{dividers.map((d, i) => (
						<path key={i} d={d} pathLength={1} />
					))}
					<path d={wobblyLine(0, 0, width, 0, seed + 1, 0.9)} pathLength={1} />
					<path d={wobblyLine(width, 0, width, height, seed + 2, 0.9)} pathLength={1} />
					<path d={wobblyLine(width, height, 0, height, seed + 3, 0.9)} pathLength={1} />
					<path d={wobblyLine(0, height, 0, 0, seed + 4, 0.9)} pathLength={1} />
				</g>
				{cells.map((cell, i) => {
					const motif = motifs[(i * 3 + seed) % motifs.length];
					const span = cell.size * CELL;
					const inset = span * 0.16;
					const scale = (span - inset * 2) / 100;
					return (
						<g
							key={i}
							className="motif"
							transform={`translate(${cell.x * CELL + inset} ${cell.y * CELL + inset}) scale(${scale})`}
							fill="none"
							stroke="var(--cloth)"
							strokeLinecap="round"
							strokeLinejoin="round"
							style={{ ["--i" as string]: i + 1 }}>
							{motif.map((s, k) => (
								<path
									key={k}
									d={s.d}
									strokeWidth={s.w / Math.sqrt(scale)}
									pathLength={1}
								/>
							))}
						</g>
					);
				})}
			</svg>
		</Box>
	);
};

export default Cloth;
