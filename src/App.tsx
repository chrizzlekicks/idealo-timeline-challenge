import { Node } from './components';
import { data } from './data/data';

function App() {
	const nodes = data.map((node, index) => {
		return (
			<Node
				key={index}
				title={node.title}
				icon={node.icon}
				description={node.description}
				completed={node.completed}
				completedAt={node.completedAt}
			/>
		);
	});

	return (
		<>
			<main
				aria-label="main"
				className="flex flex-col items-center justify-center w-screen h-screen"
			>
				<h3
					aria-label="heading"
					className="text-lg sm:text-3xl text-sky-900 font-bold p-3"
				>
					Our Hiring Process{' '}
				</h3>
				<section
					aria-label="node-section"
					className="flex flex-col sm:flex-row items-center justify-evenly sm:w-full h-full sm:h-fit relative sm:my-5"
				>
					{nodes}
					<div
						aria-label="line"
						className="h-full sm:h-0.5 bg-orange-500 w-0.5 sm:w-full absolute -z-10"
					/>
				</section>
			</main>
		</>
	);
}

export default App;
