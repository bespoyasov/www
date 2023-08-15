export function groupByName(tags) {
	const grouped = Object.entries(tags).reduce((acc, [tag, used]) => {
		const firstLetter = tag.at(0).toUpperCase();

		acc[firstLetter] ??= [];
		acc[firstLetter].push([tag, used]);
		return acc;
	}, {});

	return Object.entries(grouped).sort((a, b) => (a[0] < b[0] ? -1 : 1));
}
