const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const WebpackBar = require("webpackbar")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "static/js/main.[hash].chunk.js",
  },
  // 这边用cdn加速能减少大量的包体积！
  externals:{'react': 'React', 'react-dom': 'ReactDOM','antd': 'antd'},
  // 配置各种loade
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              lessOptions: {
                // modifyVars: {
                //   "primary-color": "#CF5659",
                //   "link-color": "#CF5659",
                // },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'static/media',
            },
          },
        ],
      },
    ],
  },
  // 文件引用不需要后缀名
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  // 本地开发服务
  devServer: {
    host: "0.0.0.0", //允许ip访问
    inline: true, //实时刷新
    hot: true, // 模块热替换机制
    port: 9000,
    compress: true,
    open: false, // 打开浏览器，默认false
  },
  // 插件配置处~
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/main.[hash].chunk.css"
    }),
    new WebpackBar(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
        }],
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: "source-map",
  // 模式，暂时还不知道干什么的
  mode: "development",
}
