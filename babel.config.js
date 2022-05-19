module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
	  	['macros'],
		[
			'module-resolver',
			{
				root: ['.'],
				extensions: [
					'.ios.ts',
					'.android.ts',
					'.ts',
					'.ios.tsx',
					'.android.tsx',
					'.tsx',
					'.jsx',
					'.js',
					'.json',
					'.png',
					'.jpg',
					'.gif',
				],
				alias: {
					'@assets': './src/assets',
					'@components': './src/components',
					'@screens': './src/screens',
					'@styles': './src/styles',
					'@packagejson': './package.json',
				},
			},
		],
	],
};
