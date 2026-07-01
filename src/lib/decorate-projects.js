const adornment = {
	// Brands & Companies
	'0x': { color: '#1a1a1a', inverted: true },
	dodo: { color: '#ff6904', inverted: true },
	drive2: { color: '#cc0233', inverted: true },
	king: { color: '#fecf02' },
	netology: { color: '#9af5d8' },
	simployer: { color: '#9773ff', inverted: true },
	spotify: { color: '#1bd760' },
	wbd: { color: '#03006c', inverted: true },

	// Personal Projects
	'fullstack-react-typescript': { color: '#be4bdb', emoji: '🦄', inverted: true },
	'refactor-like-a-superhero': { color: '#aedfff', emoji: '🦸' },
	prokrutchik: { color: '#ffbc5b', emoji: '🏂' },
	tzlvt: { color: '#141517', emoji: '💰', inverted: true },

	// Archive & Toy Projects
	'front-not-pain': { color: '#316340', emoji: '💊', inverted: true },
	'loose-equals': { color: '#ffde58', emoji: '🤡' },
	'morse-code-generator': { color: '#232323', emoji: '🔊', inverted: true },
	'ttt-tdd': { color: '#f1f8ff', emoji: '🧪' },
	bookmark: { color: '#e3e5ff', emoji: '🔖' },
	doka: { color: '#ffde58', emoji: '🐶' },
	kursovik: { color: '#246e91', emoji: '🤑', inverted: true },
	solidbook: { color: '#282a35', emoji: '🧱', inverted: true },
	tmstmp: { color: '#f5f5f5', emoji: '⏱️' },
	tools: { color: '#1a8cd8', emoji: '🛠️', inverted: true },

	// Limb
	'carousel-generator': { color: '#4262b1', emoji: '🎠', inverted: true },
	'screen-keyboard': { color: '#f5f5f5', emoji: '🧑‍💻' },
	gruntograph: { color: '#ffbc5b', emoji: '📇' },

	// Stories from Trenches
	'doka-release': { color: '#ffde58' },
	'ibike-ufa': { color: '#fe090e', inverted: true },
	'front-not-pain-release': { color: '#316340', inverted: true },
	'netology-experience': { color: '#9af5d8' },
	'novostroy-m': { color: '#cc3030', inverted: true },
	'request-crm': { color: '#582d74', inverted: true },
	'request-site': { color: '#f89120', inverted: true },
	'tzlvt-release': { color: '#141517', inverted: true },
	mrkt: { color: '#33328d', inverted: true },
	resonar: { color: '#f5f5f5' },
	taskman: { color: '#e8e8fd' },
	xmetra: { color: '#359ac5', inverted: true }
};

export const decorateProjects = (projects) =>
	projects.map((project) => ({
		...project,
		...adornment[project.slug]
	}));
