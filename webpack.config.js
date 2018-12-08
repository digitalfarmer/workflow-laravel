module.exports = {
    entry: {
        app:"./resource/assets/js/app.js"
    },
    output:{
        path : __dirname + "./public/assets/js",
        filename: "[name].js"
    },
    module: {
        rules: [{
          test: /\.js$/, // include .js files
          enforce: "pre", // preload the jshint loader
          exclude: /node_modules/, // exclude any and all files in the node_modules folder
          loaders: [{
            loader: "babel-loader"
          }]
        }]
      },
};