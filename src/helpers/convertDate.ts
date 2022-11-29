export function convertDate({ date }: { date: number | null }): string {
	return date === null
		? 'not completed yet!'
		: new Date(date).toLocaleDateString();
}
