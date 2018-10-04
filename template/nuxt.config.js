export default {
    // Headers of the page
    head: {
        title: 'toollibary-nuxt',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'A smart tool management library for the manufacturing shops of the future' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
        ]
    },

    plugins: [
        '~/plugins/vuetify.js'
    ],

    css: [
        '~/assets/style/app.styl',
    ],

    // Customize the progress bar color
    loading: { color: '#4CAF50' },

    // Build configuration
    build: {
        {{#alacarte}}
        transpile: [/^vuetify/],
        babel: {
            plugins: [
                ['transform-imports', {
                    'vuetify': {
                        'transform': 'vuetify/es5/components/${member}',
                        'preventFullImport': true
                    },
                }],
            ],
        },

        {{/alacarte}}

        // vendor: ['~/plugins/vuetify.js'],

        extractCSS: true,
        // cssSourceMap: false, // fixes 404 error

        // Run ESLint on save
        extend (config, {isDev}) {
            if (isDev && process.client) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
}
