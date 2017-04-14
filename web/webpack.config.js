module.exports = {
    entry: {
        main: './app/app.jsx',
        search: './app/apps.jsx'
    },
    output: {
        path: __dirname,
        filename: './views/js/[name]-bundle.js'
    },
    resolve: {
        modules: ['node_modules', './app/components', './app/api'],
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: { presets: ['react', 'es2015'] },
                test: /\.jsx?$/,
                exclude: /(node_modules)/
            }
        ]
    }
};
