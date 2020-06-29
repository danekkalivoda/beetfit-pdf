module.exports = {
	xmlMode: true,
	plugins: {
		"posthtml-modules": {
			root: __dirname
		},
		"posthtml-include": {
			root: __dirname
		}
	}
};