export const data = {
	ㄱ: {
		'ㄱ-0': ['ㄱ-0-가', ' ㄱ-0-나'],
		'ㄱ-1': ['ㄱ-1-가', ' ㄱ-1-나'],
	},
	ㄴ: {
		'ㄴ-0': ['ㄴ-0-가', ' ㄴ-0-나'],
		'ㄴ-1': ['ㄴ-1-가', ' ㄴ-1-나'],
	},
	ㄷ: {
		'ㄷ-0': ['ㄷ-0-가', ' ㄷ-0-나'],
		'ㄷ-1': ['ㄷ-1-가', ' ㄷ-1-나'],
	},
};

type DataType = { [key: string]: { [key: string]: string[] }[] };

const countryCityData = [
	{
		USA: ['New York', 'Los Angeles', 'Chicago'],
		Canada: ['Toronto', 'Vancouver', 'Montreal'],
		Japan: ['Tokyo', 'Osaka', 'Kyoto'],
	},
];
