const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // Configuring the loaders (rules):
    module: {
        rules: [
            {
                use: 'babel-loader',
                // "test" expects a Regular expression to be applied to the 
                // filename of every file imported into the project.
                test: /\.js$/ // -> verifies if the file ends with ".js"
            },
            // {
            //     // The rules are applied from right to left, which means the "css-loader"
            //     // will be applied first and then the "style-loader".
            //     // - css-loader: Knows hot how to deal with "CSS imports"
            //     // - style-loader: Takes "CSS imports" and adds them to the HTML document
            //     use: ['style-loader', 'css-loader'],
            //     test: /\.css$/
            // }
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};

module.exports = config;