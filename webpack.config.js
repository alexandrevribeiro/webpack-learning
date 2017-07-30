const path = require('path');

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
            }
        ]
    }
};

module.exports = config;