const adornment = {
	doka: { color: '#fbd952', emoji: '🐶' },
	prokrutchik: { color: '#ffbc5d', emoji: '🏂' },
	tmstmp: { color: '#f6f5f5', emoji: '⏱️' },
	tzlvt: { color: '#141015', emoji: '💰', inverted: true },
	'front-not-pain': { color: '#46564b', emoji: '💊', inverted: true },
	'fullstack-react-typescript': { color: '#60379e', emoji: '🦄', inverted: true },
	'refactor-like-a-superhero': { color: '#aedffe', emoji: '🦸' },

	bookmark: { color: '#e3e5ff', emoji: '🔖' },
	gruntograph: { color: '#ffbc5d', emoji: '📇' },
	kursovik: { color: '#274c70', emoji: '🤑', inverted: true },
	solidbook: { color: '#282a35', emoji: '💥', inverted: true },
	'ttt-tdd': { color: '#f2f8ff', emoji: '🧪' },

	tools: { color: '#1a8cd8', emoji: '🛠️', inverted: true },
	'loose-equals': { color: '#fbd952', emoji: '🤡' },

	'carousel-generator': { color: '#4262b1', emoji: '🎠', inverted: true },
	'screen-keyboard': { color: '#f6f5f5', emoji: '🧑‍💻' }
};

export const decorateProjects = (projects) =>
	projects.map((project) => ({
		...project,
		...adornment[project.slug]
	}));
