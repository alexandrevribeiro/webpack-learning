const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
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
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                // The loaders are applied from right to left.
                use: [
                    {
                        // 2º loader: It takes the result of the last loader, verifies its
                        // size and behaves different depending on the size. If it's smaller than
                        // the "limit", it'll include the image into the "bundle.js" as raw data.
                        // Otherwise, it'll include the raw image in the output directory.
                        loader: 'url-loader',
                        options: { limit: 40000 }
                        // Note: When configuring the "output.publicPath" prop, "url-loader"
                        // will use it to concatenate the name of the "big" imported images 
                        // with this "publicPath"
                    },
                    'image-webpack-loader' // 1º loader: It resizes (compress) the image to reduce its size
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};

module.exports = config;