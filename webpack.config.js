const commonConfig = require("./build-utils/webpack.common");
const { merge } = require("webpack-merge");

module.exports = env => {
    console.log(env);

    const envConfig = require(`./build-utils/webpack.${env.env}.js`);

    return merge(commonConfig, envConfig);
};
