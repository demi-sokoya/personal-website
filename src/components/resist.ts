/** Seeded wobble helpers for hand-painted resist lines. */

const rng = (seed: number) => {
	let s = (Math.abs(Math.floor(seed)) % 2147483646) + 1;
	return () => (s = (s * 16807) % 2147483647) / 2147483647;
};

const r1 = (n: number) => Math.round(n * 10) / 10;

/**
 * A slightly unsteady line from (x1, y1) to (x2, y2), as if painted with a
 * feather: the path drifts off the straight course by up to `amp` units.
 */
export function wobblyLine(
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	seed: number,
	amp = 1.6,
): string {
	const rand = rng(seed);
	const len = Math.hypot(x2 - x1, y2 - y1);
	const steps = Math.max(3, Math.round(len / 25));
	// Normal to the line, for the wobble offset
	const nx = -(y2 - y1) / len;
	const ny = (x2 - x1) / len;
	const pts: Array<[number, number]> = [];
	for (let i = 0; i <= steps; i++) {
		const t = i / steps;
		const off = i === 0 || i === steps ? 0 : (rand() - 0.5) * 2 * amp;
		pts.push([x1 + (x2 - x1) * t + nx * off, y1 + (y2 - y1) * t + ny * off]);
	}
	let d = `M${r1(pts[0][0])} ${r1(pts[0][1])}`;
	for (let i = 1; i < pts.length; i++) {
		const [px, py] = pts[i - 1];
		const [x, y] = pts[i];
		d += ` Q${r1(px + (x - px) / 2 + nx * (rand() - 0.5) * amp)} ${r1(py + (y - py) / 2 + ny * (rand() - 0.5) * amp)} ${r1(x)} ${r1(y)}`;
	}
	return d;
}

/**
 * A hand-drawn curve through the given points: each interior point drifts by
 * up to `amp` units, then the run is smoothed into cubic curves. End points
 * stay put so shapes that touch a tile edge meet their mirror image cleanly.
 */
export function wobblyCurve(
	points: Array<[number, number]>,
	seed: number,
	amp = 1.2,
): string {
	const rand = rng(seed);
	const pts = points.map(([x, y], i) =>
		i === 0 || i === points.length - 1
			? ([x, y] as [number, number])
			: ([x + (rand() - 0.5) * 2 * amp, y + (rand() - 0.5) * 2 * amp] as [number, number]),
	);
	const P = [pts[0], ...pts, pts[pts.length - 1]];
	let d = `M${r1(P[1][0])} ${r1(P[1][1])}`;
	for (let i = 1; i < P.length - 2; i++) {
		const [p0, p1, p2, p3] = [P[i - 1], P[i], P[i + 1], P[i + 2]];
		d += ` C${r1(p1[0] + (p2[0] - p0[0]) / 6)} ${r1(p1[1] + (p2[1] - p0[1]) / 6)} ${r1(p2[0] - (p3[0] - p1[0]) / 6)} ${r1(p2[1] - (p3[1] - p1[1]) / 6)} ${r1(p2[0])} ${r1(p2[1])}`;
	}
	return d;
}
