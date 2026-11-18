import { Box, type BoxProps } from "@chakra-ui/react";
import { useId } from "react";
import { wobblyCurve, wobblyLine } from "./resist";

/*
 * One adire tile, mirrored into a field.
 *
 * The tile is drawn once in a 100 x 100 square. Across a row every other
 * tile is flipped horizontally, and down a column every other tile is
 * flipped vertically, so each edge meets its own reflection. Shapes drawn
 * against an edge or a corner therefore close up across the seam:
 *
 *   top-left corner      quarter rings      -> full concentric rings
 *   bottom-right corner  quarter diamonds   -> nested diamonds
 *   right edge           half almond        -> whole almond leaves
 *   bottom edge          half scallops      -> chains of small circles
 *   left edge            half zigzag        -> a run of diamonds
 *   top edge             short ticks        -> ladders across the seam
 *
 * The diagonal waves and dots in the middle stay inside the tile and turn
 * into a lattice of crossing lines once the field is mirrored.
 */

const TILE = 100;

/** Points on an arc around (cx, cy), from angle a0 to a1 in degrees. */
const arc = (cx: number, cy: number, r: number, a0: number, a1: number, steps = 8) =>
	Array.from({ length: steps + 1 }, (_, i) => {
		const t = ((a0 + ((a1 - a0) * i) / steps) * Math.PI) / 180;
		return [cx + Math.cos(t) * r, cy + Math.sin(t) * r] as [number, number];
	});

/** A gentle wave from (x1, y1) to (x2, y2), swinging `amp` either side. */
const wave = (x1: number, y1: number, x2: number, y2: number, amp: number, steps = 10) => {
	const len = Math.hypot(x2 - x1, y2 - y1);
	const nx = -(y2 - y1) / len;
	const ny = (x2 - x1) / len;
	return Array.from({ length: steps + 1 }, (_, i) => {
		const t = i / steps;
		const s = Math.sin(t * Math.PI * 3) * amp;
		return [x1 + (x2 - x1) * t + nx * s, y1 + (y2 - y1) * t + ny * s] as [number, number];
	});
};

// Stroked lines, each with its own weight so the hand shows
const strokes: Array<{ d: string; w: number }> = [
	// Top-left corner: quarter rings
	...[14, 26, 38].map((r, i) => ({ d: wobblyCurve(arc(0, 0, r, 0, 90), 11 + i, 0.9), w: 2.4 - i * 0.2 })),

	// Bottom-right corner: quarter diamonds
	{ d: wobblyLine(100, 58, 58, 100, 21, 1.1), w: 2.3 },
	{ d: wobblyLine(100, 74, 74, 100, 22, 1), w: 2 },

	// Right edge: half an almond leaf, with its midrib
	{ d: wobblyCurve([[100, 8], [93, 13], [88, 20], [87, 26], [89, 33], [94, 39], [100, 44]], 31, 0.7), w: 2.2 },
	{ d: wobblyLine(100, 14, 94, 26, 32, 0.6), w: 1.6 },

	// Bottom edge: half scallops
	...[14, 28, 42].map((x, i) => ({ d: wobblyCurve(arc(x, 100, 6, 180, 360, 6), 41 + i, 0.5), w: 2 })),

	// Left edge: half zigzag
	{ d: wobblyCurve([[0, 52], [7, 58], [0, 64], [7, 70], [0, 76], [7, 82], [0, 88]], 51, 0.4), w: 2 },

	// Top edge: ticks
	...[56, 64, 72, 80, 88].map((x, i) => ({ d: wobblyLine(x, 0, x, 9, 61 + i, 0.5), w: 1.8 })),

	// Middle: two diagonal waves
	{ d: wobblyCurve(wave(22, 64, 64, 22, 2.6), 71, 0.6), w: 2.2 },
	{ d: wobblyCurve(wave(36, 74, 74, 36, 2.6), 72, 0.6), w: 2.2 },
];

// Filled marks
const fills: string[] = [
	// Quarter dot in the top-left corner, a full dot once mirrored
	"M0 0 L5.5 0 A5.5 5.5 0 0 1 0 5.5 Z",
	// Solid corner of the diamonds
	"M100 88 L88 100 L100 100 Z",
];

const dots: Array<[number, number, number]> = [
	[44, 52, 2.4],
	[48, 48, 2.6],
	[52, 44, 2.4],
	[95.5, 26, 2],
	[28, 28, 2.2],
];

interface AdirePatternProps extends BoxProps {
	/** Tiles per side; the brief is 8 */
	size?: number;
	/** Override the number of tiles across (defaults to size) */
	columns?: number;
	/** Override the number of tiles down (defaults to size) */
	rows?: number;
	/** Show the tile seams, to see how the mirroring works */
	showSeams?: boolean;
}

const AdirePattern = ({
	size = 8,
	columns = size,
	rows = size,
	showSeams = false,
	...boxProps
}: AdirePatternProps) => {
	// Unique ids so more than one pattern can sit on a page
	const uid = useId().replace(/:/g, "");
	const tileId = `adire-tile-${uid}`;
	const clipId = `adire-clip-${uid}`;
	const width = columns * TILE;
	const height = rows * TILE;

	const cells = [];
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < columns; col++) {
			const flipX = col % 2 === 1;
			const flipY = row % 2 === 1;
			// Flip about the tile's own centre: shift by a tile, then scale by -1
			const tx = col * TILE + (flipX ? TILE : 0);
			const ty = row * TILE + (flipY ? TILE : 0);
			cells.push(
				<use
					key={`${row}-${col}`}
					href={`#${tileId}`}
					transform={`translate(${tx} ${ty}) scale(${flipX ? -1 : 1} ${flipY ? -1 : 1})`}
				/>,
			);
		}
	}

	return (
		<Box {...boxProps}>
			<svg
				viewBox={`0 0 ${width} ${height}`}
				width="100%"
				role="img"
				aria-label={`Adire pattern: one hand-drawn tile mirrored across a ${columns} by ${rows} grid`}
				style={{ display: "block" }}>
				<defs>
					<clipPath id={clipId}>
						<rect x="0" y="0" width={TILE} height={TILE} />
					</clipPath>
					<g id={tileId} clipPath={`url(#${clipId})`}>
						<g
							fill="none"
							stroke="var(--cloth)"
							strokeLinecap="round"
							strokeLinejoin="round">
							{strokes.map((s, i) => (
								<path key={i} d={s.d} strokeWidth={s.w} />
							))}
						</g>
						<g fill="var(--cloth)">
							{fills.map((d, i) => (
								<path key={i} d={d} />
							))}
							{dots.map(([cx, cy, r], i) => (
								<circle key={i} cx={cx} cy={cy} r={r} />
							))}
						</g>
					</g>
				</defs>

				<rect x="0" y="0" width={width} height={height} fill="var(--indigo-800)" />
				{cells}

				{showSeams && (
					<g stroke="var(--turmeric)" strokeWidth={0.75} strokeDasharray="3 4" opacity={0.7}>
						{Array.from({ length: columns - 1 }, (_, i) => (
							<line key={`c${i}`} x1={(i + 1) * TILE} y1={0} x2={(i + 1) * TILE} y2={height} />
						))}
						{Array.from({ length: rows - 1 }, (_, i) => (
							<line key={`r${i}`} x1={0} y1={(i + 1) * TILE} x2={width} y2={(i + 1) * TILE} />
						))}
					</g>
				)}
			</svg>
		</Box>
	);
};

export default AdirePattern;
