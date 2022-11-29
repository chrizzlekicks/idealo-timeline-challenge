import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
	render(<App />);
	const app = screen.getByRole('main');
	const h = screen.getByRole('heading');

	it('renders correctly in the DOM', () => {
		expect(app).toBeInTheDocument();
	});

	it('contains other children elements', () => {
		expect(app).toContainHTML('h3');
		expect(app).toContainHTML('section');
	});

	it('has an accessible name', () => {
		expect(app).toHaveAccessibleName(/main/i);
		expect(h).toHaveAccessibleName(/heading/i);
	});
});
