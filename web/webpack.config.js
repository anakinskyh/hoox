module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
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
