import { render, screen } from '@testing-library/react';
import { Tooltip } from './Tooltip';

const mockData = {
	title: 'Titel',
	description: 'Beschreibung',
	completed: false,
	completedAt: 10203056,
};

describe('Tooltip component', () => {
	render(<Tooltip {...mockData} />);
	const tip = screen.getByRole('complementary');
	const headr = screen.getByRole('banner');
	const btn = screen.getByRole('button');

	it('renders correctly in the DOM', () => {
		expect(tip).toBeInTheDocument();
	});

	it('contains other children elements', () => {
		expect(tip).toContainHTML('header');
		expect(tip).toContainHTML('section');
	});

	it('has an accessible name', () => {
		expect(tip).toHaveAccessibleName(/tooltip/i);
		expect(headr).toHaveAccessibleName(/tooltip-header/i);
	});

	it('renders styles correctly by checking exact classes', () => {
		expect(tip).toHaveClass(
			'border bg-gray-700/50 text-white flex flex-col justify-center items-start rounded-md absolute w-40 sm:w-52 p-2 m-2 sm:top-20 transition-all duration-100 shadow-md',
			{
				exact: true,
			}
		);
		expect(btn).toHaveClass(
			'w-full h-auto text-sm sm:text-base p-1 sm:p-2 my-2 rounded bg-green-500 text-white hover:bg-green-400',
			{
				exact: true,
			}
		);
	});
});
