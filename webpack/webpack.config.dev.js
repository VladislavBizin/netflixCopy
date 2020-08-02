const path = require('path');
const PATH_DIST = path.join(__dirname, '../dist');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: PATH_DIST,
        hot:true,
        compress: true,
        open: "Chrome",
        openPage:'index.html'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
};
