const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const development = require('./webpack.config.dev');
const production = require('./webpack.config.prod');

module.exports = env => {
    const config = { development, production };
    return merge(commonConfig,config[env] || {});
};
