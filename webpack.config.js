// entry -> output
const path=require('path');

module.exports = {
    mode : 'development',
    entry:'./src/app.js',
    output: {
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules : [{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude : /node_modules/ 
        },{
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },{
            test: /\.(jpg|png|svg)$/,
            use: {
                loader: 'url-loader',
            },
        }]
    },
    devtool : "eval-nosources-cheap-module-source-map",
    devServer : {
        historyApiFallback: true,
        contentBase : path.join(__dirname,'public'),
        hot:true
    }
};
