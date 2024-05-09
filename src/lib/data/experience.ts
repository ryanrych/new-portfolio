import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'rjreliance',
		company: 'RJ Reliance',
		description: `• Utilized Files.com and Salesforce APIs in Python to download files of UKG training hours, rate employees on hours
		spent, and upload the results to their contact on Salesforce for the CEO to see. Deployed on Heroku for weekly runs
		\n• Extracted and manipulated employee forecasted hours from Salesforce using Python and SOQL
		\n• Worked with data integration solutions in Boomi (IPaaS) and RPAs with Power Automate`,
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Chicago, IL',
		period: { from: new Date(2023, 5, 1), to: new Date(2023, 8, 1) },
		skills: getSkills('py', 'MySQL', 'Heroku', 'Boomi', 'PowerAutomate'),
		name: 'Software Development Intern',
		color: 'dodgerblue',
		links: [],
		logo: Assets.RJ,
		shortDescription: 'Junior year internship in iPaaS programming.'
	},
	{
		slug: 'nextgenhq',
		company: 'Next Gen HQ',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'New York, NY',
		period: { from: new Date(2022, 5, 1), to: new Date(2022, 8, 1)},
		skills: getSkills('ts', 'js', 'Firebase', 'expo', 'react'),
		name: 'Software Engineering Intern',
		color: 'red',
		links: [],
		logo: Assets.nghq,
		shortDescription: 'Sophomore year internship in full stack mobile/web development'
	},
	{
		slug: 'icc',
		company: 'International Cardiology Consultants',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Columbia, SC (remote)',
		period: { from: new Date(2021, 5, 1), to: new Date(2022, 8, 1) },
		skills: getSkills('py', 'js', 'expo', 'react', 'kivy'),
		name: 'Contract Developer',
		color: 'red',
		links: [],
		logo: Assets.icc,
		shortDescription: 'Summer contracts in front-end development'
	},
	{
		slug: 'primex',
		company: 'Primex',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Lake Geneva, WI',
		period: { from: new Date(2019, 5, 1), to: new Date(2021, 8, 1) },
		skills: getSkills('py', 'java', 'MySQL', 'javafx', 'pandas'),
		name: 'Product Development Intern',
		color: 'dodgerblue',
		links: [],
		logo: Assets.primex,
		shortDescription: 'Late high school - early college job in full-stack development and product managment'
	},
];

export const title = 'Experience';
