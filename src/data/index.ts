import weatherly from "@/images/weatherly.png";
import littleLemon from "@/images/little-lemon.png";

export interface Project {
	id: number;
	featured: boolean;
	tag: string;
	title: string;
	desc: string;
	stack: string[];
	imageSrc: string;
	/** Intrinsic pixel size, so the browser reserves space before the image loads */
	imageWidth: number;
	imageHeight: number;
	live: string;
	repo: string;
}

export interface GhostCard {
	ghost: true;
	label: string;
}

export type ProjectItem = Project | GhostCard;

export const projects: ProjectItem[] = [
	{
		id: 1,
		featured: true,
		tag: "Featured . 2026",
		title: "Weatherly",
		desc: "A responsive weather app with live forecasts, hourly scrolling, and dynamic city photography pulled straight from Wikipedia.",
		stack: ["React", "JavaScript", "CSS", "REST APIs", "Wikipedia API", "Git"],
		imageSrc: weatherly,
		imageWidth: 1216,
		imageHeight: 763,
		live: "https://demi-sokoya.github.io/weather-app/",
		repo: "https://github.com/demi-sokoya/weather-app",
	},

	{
		id: 2,
		featured: false,
		tag: "2026",
		title: "Little Lemon",
		desc: "A responsive React SPA featuring client-side routing, form validation, reusable components, and a Jest test suite.",
		stack: [
			"React",
			"JavaScript",
			"React Router",
			"Jest",
			"React Testing Library",
			"Git",
			"CSS",
		],
		imageSrc: littleLemon,
		imageWidth: 1056,
		imageHeight: 638,
		live: "https://demi-sokoya.github.io/little-lemon-restaurant/",
		repo: "https://github.com/demi-sokoya/little-lemon-restaurant",
	},
	{ ghost: true, label: "In progress" },
];

export const skills: string[] = [
	"React",
	"TypeScript",
	"JavaScript (ES6+)",
	"HTML & CSS",
	"Node.js",
	"Git & GitHub",
	"Figma",
	"Adobe Illustrator",
	"Responsive design",
	"Accessibility",
	"Performance optimization",
];
