import * as React from 'react';
import { convertDate } from '../../helpers/convertDate';

interface ITooltips {
	title: string;
	description: string;
	completed: boolean;
	completedAt: number | null;
	onClick?: (e?: any) => void;
}

export const Tooltip: React.FC<ITooltips> = ({
	title,
	description,
	completed,
	completedAt,
	onClick,
}): JSX.Element => {
	/* rendering functions */
	const renderButtonIfCompleted: JSX.Element | null = completed ? null : (
		<button
			className="w-full h-auto text-sm sm:text-base p-1 sm:p-2 my-2 rounded bg-green-500 text-white hover:bg-green-400"
			onClick={onClick}
		>
			Completed?
		</button>
	);

	const dateConversion: string = convertDate({ date: completedAt });

	return (
		<>
			<aside
				aria-label="tooltip"
				className="border bg-gray-700/50 text-white flex flex-col justify-center items-start rounded-md absolute w-40 sm:w-52 p-2 m-2 sm:top-20 transition-all duration-100 shadow-md"
			>
				<header aria-label="tooltip-header">
					<h2 className="text-sm sm:text-lg font-bold">{title}</h2>
					<p className="text-xs sm:text-base font-normal">{description}</p>
				</header>
				<section
					aria-label="tooltip-section"
					className="flex justify-center w-full"
				>
					{renderButtonIfCompleted}
				</section>
				<section
					aria-label="tooltip-section"
					className="flex flex-col justify-start w-full my-1"
				>
					<p className="text-xs sm:text-base font-semibold">Completed at: </p>
					<p className="text-xs sm:text-base font-light">{dateConversion}</p>
				</section>
			</aside>
		</>
	);
};
