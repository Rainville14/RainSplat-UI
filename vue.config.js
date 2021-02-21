const BUILD_NUMBER = process.env.BUILD_NUMBER || '0';

module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "~@/sass/main.scss"`
			},
		},
	},
	outputDir: process.env.DEV_SERVER !== 'true' ? `dist/${BUILD_NUMBER}` : 'dist',
	publicPath: process.env.NODE_ENV === 'local' || process.env.DEV_SERVER === 'true' ? `/` : `/wp-content/themes/blankslate/${BUILD_NUMBER}`,
	assetsDir: process.env.NODE_ENV === 'local' || process.env.DEV_SERVER === 'true' ? '' : 'assets',
	chainWebpack: config => {
		if (process.env.NODE_ENV !== 'local' && process.env.DEV_SERVER !== 'true') {
			config
				.plugin('html')
				.tap(args => {
					args[0].template = 'public/spa.php'
					args[0].filename = '../spa.php'
					args[0].hash = process.env.NODE_ENV !== 'production'
					return args
				})
		}
	},
	pluginOptions: {
		i18n: {
			locale: 'es',
			fallbackLocale: 'en',
			localeDir: 'locales',
			enableInSFC: false
		},
		prerenderSpa: {
		}
	},
	devServer: {
		disableHostCheck: true,
		port: process.env.port,
		proxy: {
			"^/wp-json/": {
				changeOrigin: true,
				secure: false,
				target: "http://www.rainsplat.com",
				logLevel: "debug"
			}
		}
	},
	transpileDependencies: [
		'axios',
		'vue',
		'vuex',
		'vue-analytics',
		'vue-gtm',
		'vuetify',
		'vue-the-mask',
	],
}
