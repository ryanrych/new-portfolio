import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor\'s degree of Computer Science',
		description: '',
		location: 'Stony Brook, New York',
		logo: Assets.SBU,
		name: '',
		organization: 'Stony Brook University',
		period: { from: new Date(2020, 8, 1), to: new Date(2023, 12, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['OOP', 'Full Stack Development', 'Algorithms', 'Data Structures', 'Computational Geometry', 'Low-Level Programming', 'Networks']
	},
	{
		degree: 'Bachelor\'s degree of Applied Mathematics and Statics',
		description: '',
		location: 'Stony Brook, New York',
		logo: Assets.SBU,
		name: '',
		organization: 'Stony Brook University',
		period: { from: new Date(2023, 2, 1), to: new Date(2023, 12, 1)},
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Abstract Algebra', 'Logic', 'Calculus', 'Linear Algebra', 'Graph Theory', 'Statistics', 'Combinatorics', 'Game Theory']
	}
];

export const title = 'Education';
