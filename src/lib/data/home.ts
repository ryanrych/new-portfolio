import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Ryan';

export const lastName = 'Rychlak';


// I'm a computer science and applied mathematics student at Stony Brook University. I have
// experience in full stack mobile/web development, IPaaS programming, and algorithms research.
// I made this site to showcase a collection of my top projects. Enjoy!



export const description =
	`Computer Science and Applied Mathematics graduate of Stony Brook University. Former software development intern 
	at RJ Reliance and Next Gen HQ, where I worked in IPaaS programming and full stack mobile/web development.`;

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/ryanrych' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/ryan-rychlak/'
	},
	{
		platform: Platform.Email,
		link: 'mailto:ryanjrychlak@gmail.com'
	},
];

export const skills = getSkills('js', 'py', 'ts', 'Java', 'cpp', 'mongo', 'MySQL', 'Firebase', 'Heroku', 'Boomi');
