const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const config = {
    mode: "development",
    devtool: "source-map",
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    plugins: [
        new BrowserSyncPlugin({
            files: "**/*.php",
            injectChanges: true,
            proxy: "https://wfdtheme.local/"
        })
    ]
};

module.exports = config;
