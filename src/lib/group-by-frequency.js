import { locale } from './config';

const usesLabel = { en: 'Uses', ru: 'упоминаний' }[locale];
const groups = [30, 20, 15, 10, 8, 7, 6, 5, 4, 3, 2, 1];

const composeKey = (current, previous) => {
	if (current === groups.at(0)) return `${current}+ ${usesLabel}`;
	if (current !== previous - 1) return `${current}...${previous - 1}`;
	return `${current} `;
};

export function groupByFrequency(tags) {
	const sorted = Object.entries(tags).sort((a, b) => b[1] - a[1]);
	const grouped = {};

	let previous = null;

	for (const [tag, used] of sorted) {
		for (const group of groups) {
			if (used >= group) {
				const key = composeKey(group, previous, groups);

				grouped[key] ??= [];
				grouped[key].push([tag, used]);
				break;
			}

			previous = group;
		}
	}

	return Object.entries(grouped).sort((a, b) => b[0] - a[0]);
}
