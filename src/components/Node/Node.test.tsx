import { render, screen } from '@testing-library/react';
import { Node } from './Node';
import { FaAd } from 'react-icons/fa';

const mockData = {
	title: 'Titel',
	description: 'Beschreibung',
	icon: <FaAd />,
	completed: false,
	completedAt: 10203056,
};

describe('Node component', () => {
	render(<Node {...mockData} />);
	const node = screen.getByRole('article');
	const icon = screen.getByLabelText(/node-icon-wrapper/);

	it('renders correctly in the DOM', () => {
		expect(node).toBeInTheDocument();
	});

	it('contains span element to wrap icon', () => {
		expect(node).toContainHTML('span');
	});

	it('has the right aria-label applied', () => {
		expect(node).toHaveAccessibleName(/node/i);
		expect(icon).toHaveAccessibleName(/node-icon-wrapper/i);
	});

	it('renders styles correctly by checking exact classes', () => {
		expect(node).toHaveClass('flex flex-col justify-center items-center', {
			exact: true,
		});
	});
});
