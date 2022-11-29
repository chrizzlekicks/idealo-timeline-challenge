import * as React from 'react';
import { Tooltip } from '../Tooltip';
import confetti from 'canvas-confetti';

interface INode {
	key?: number;
	title: string;
	description: string;
	icon: React.ReactNode;
	completed: boolean;
	completedAt: number | null;
	onClick?: () => void;
}

export const Node: React.FC<INode> = ({
	title,
	description,
	icon,
	completed,
	completedAt,
}): JSX.Element => {
	const [node, setNode] = React.useState<INode>({
		title: title,
		description: description,
		icon: icon,
		completed: completed,
		completedAt: completedAt,
	});
	const [openTooltip, setOpenTooltip] = React.useState<boolean>(false);

	const handleClick = (): void => {
		setOpenTooltip(!openTooltip);
	};

	const handleCompleted = (): void => {
		setNode({ ...node, completed: true, completedAt: Date.now() });
		confetti({
			particleCount: 150,
			spread: 120,
			origin: { y: 0.6 },
		});
	};

	/* rendering functions */
	const renderTooltip: JSX.Element | null = openTooltip ? (
		<Tooltip onClick={handleCompleted} {...node} />
	) : null;

	return (
		<>
			<article
				aria-label="node"
				className="flex flex-col items-center justify-center"
				onClick={handleClick}
			>
				<span
					aria-label="node-icon-wrapper"
					className={`m-4 flex justify-center items-center border-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 relative ${
						node.completed
							? 'bg-slate-400 border-slate-100 text-gray-100'
							: 'bg-sky-900 border-slate-200 cursor-pointer text-white hover:text-red-500 hover:shadow-md'
					}`}
				>
					{node.icon}
				</span>
				{renderTooltip}
			</article>
		</>
	);
};
