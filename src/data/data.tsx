import { FaPhone, FaPencilAlt, FaHeart, FaCheck } from 'react-icons/fa';

export const data = [
	{
		title: 'Phone Interview',
		description: '',
		icon: <FaPhone />,
		completed: true,
		completedAt: 1666773073,
	},
	{
		title: 'Technical Task',
		description: '',
		icon: <FaPencilAlt />,
		completed: false,
		completedAt: null,
	},
	{
		title: 'Meeting the Team & Technical Exchange',
		description: '',
		icon: <FaHeart />,
		completed: false,
		completedAt: null,
	},
	{
		title: 'Hired!',
		description: 'You are part of our team.',
		icon: <FaCheck />,
		completed: false,
		completedAt: null,
	},
];
