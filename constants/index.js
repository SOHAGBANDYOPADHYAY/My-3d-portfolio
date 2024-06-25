import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import WebdeveloperIcon from "./../public/assets/icons/Webdeveloper.svg";
import TeamPlayerIcon from "./../public/assets/icons/TeamPlayer.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";

export const navLinks = [
	{
		id: "about",
		title: "About"
	},
	{
		id: "work",
		title: "Work"
	},
	{
		id: "projects",
		title: "Projects"
	},
	{
		id: "contact",
		title: "Contact"
	}
];

const services = [
	// {
	// 	title: "Full Stack Developer",
	// 	icon: web
	// },
	{
		title: "Web Developer",
		icon: <WebdeveloperIcon />
	},
	{
		title: "Team Player",
		icon: <TeamPlayerIcon />
	},
	{
		title: "Problem Solving",
		icon: <ProblemSolvingIcon />
	}
	// {
	// 	title: "Backend Developer",
	// 	icon: backend
	// }
	// {
];

const technologies = {
	languages: [
		{
			name: "HTML5",
			icon: "/assets/tech/html5.svg",
			link: "https://html.spec.whatwg.org/multipage/"
		},
		{
			name: "CSS3",
			icon: "/assets/tech/css3.svg",
			link: "https://www.w3.org/Style/CSS/Overview.en.html"
		},
		{
			name: "JavaScript",
			icon: "/assets/tech/javascript.svg",
			link: "https://262.ecma-international.org/"
		},
		
	],
	frameworks: [
		{
			name: "Next.js",
			icon: "/assets/tech/nextjs.svg",
			link: "https://nextjs.org/"
		},
		{
			name: "TailwindCSS",
			icon: "/assets/tech/tailwindcss.svg",
			link: "https://tailwindcss.com/"
		},
		{
			name: "Express.js",
			icon: "/assets/tech/expressjs.png",
			link: "https://expressjs.com/"
		}
	],
	libraries: [
		{
			name: "React",
			icon: "/assets/tech/react.svg",
			link: "https://react.dev/"
		},
		
	],
	tools: [
		{
			name: "Git",
			icon: "/assets/tech/git.svg",
			link: "https://git-scm.com/"
		},
		{
			name: "Github",
			icon: "/assets/icons/github.svg",
			link: "https://github.com/"
		}
		// {
		// 	name: "Postman",
		// 	icon: "/assets/tech/postman.svg",
		// 	link: "https://www.postman.com/"
		// },
		// {
		// 	name: "Docker",
		// 	icon: "/assets/tech/docker.svg",
		// 	link: "https://www.docker.com/"
		// }
	],
	environments: [
		{
			name: "Node.js",
			icon: "/assets/tech/nodejs.svg",
			link: "https://nodejs.org/en"
		}
	],
	databases: [
		{
			name: "MongoDB",
			icon: "/assets/tech/mongodb.svg",
			link: "https://www.mongodb.com/"
		},
		{
			name: "Mysql",
			icon: "/assets/tech/mysql.svg",
			link: "https://www.mysql.com/"
		}
	]
};

const experiences = [
	{
		title: "Service Engineer",
		company_name: "Senior engineer at Redington Limited",
		icon: "/assets/company/redington.png",
		iconBg: "#E6DEDD",
		date: "July 2023 - Present",
		points: [
			"Currently working as a service engineer.",
			"Giving technical support to customer."
		]
	},
	{
		title: "Web Developer",
		icon: "/assets/company/developer.png",
		iconBg: "#E6DEDD",
		date: "August 2022 - Present",
		points: [
			"Compleated Full stack web development (MERN) course.",
			"Working on individual projects.",
			"Learning new things to develop myself.",
		
		]
	}
];



const projects = [
	{
		name: "react-weather-app",
		description:
			" Real-Time Weather Data. Allow users to search for weather conditions in any city or location. Optimized for both desktop and mobile devices ",
		tags: [
			{
				name: "React Js",
				color: "blue-text-gradient"
			},
			{
				name: "Weather Api",
				color: "green-text-gradient"
			},
			{
				name: "JavaScript",
				color: "pink-text-gradient"
			}
		],
		image: "/assets/projects/weather-pic.png",
		source_code_link: "https://github.com/SOHAGBANDYOPADHYAY/react-weather-app",
		deployed_link: "https://weather-app-sohag.netlify.app/"
	},
	{
		name: "recipe-finder-react",
		description:
			"this is a simple recipe finder app where users can find various recipe.",
		tags: [
			{
				name: "React Js",
				color: "blue-text-gradient"
			},
			{
				name: "JavaScript",
				color: "green-text-gradient"
			},
			{
				name: "Tailwind CSS",
				color: "pink-text-gradient"
			},
			// {
			// 	name: "mongodb",
			// 	color: "orange-text-gradient"
			// }
		],
		image: "/assets/projects/recipe.png",
		source_code_link:"https://github.com/SOHAGBANDYOPADHYAY/recipe-finder-react",
		deployed_link: "https://recipe-finder-react-sohag.vercel.app/"
	},
	{
		name: "Currency-converter",
		description:
			"This is a react based currency converter app. Here users can add their favourite currency",
		tags: [
			{
				name: "react Js",
				color: "blue-text-gradient"
			},
			{
				name: "Tailwind CSS",
				color: "green-text-gradient"
			},
			{
				name: "JavaScript",
				color: "pink-text-gradient"
			}
		],
		image: "/assets/projects/currency-converter.png",
		source_code_link: "https://github.com/SOHAGBANDYOPADHYAY/currency-converter",
		deployed_link: "https://currency-converter-sohag.vercel.app/"
	}
	
];

const socials = [
	{
		id: "github",
		icon: <GithubIcon />,
		link: "https://github.com/SOHAGBANDYOPADHYAY"
	},
	{
		id: "linkedin",
		icon: <LinkedInIcon />,
		link: "https://www.linkedin.com/in/sohag-bandyopadhyay"
	}
	// {
	// 	id: "x",
	// 	icon: <XIcon />,
	// 	link: "https:// your instagram id"
	// },
	// {
	// 	id: "instagram",
	// 	icon: <InstagramIcon />,
	// 	link: "https:// your instagram id"
	// }
];

export { services, technologies, experiences, projects, socials };
