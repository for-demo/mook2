const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

// 判斷是否為生產環境
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: {
    index: "./src/js/index.js",
    list: "./src/js/list.js",
    tagList: "./src/js/tagList.js",
    article: "./src/js/article.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: 'main.[hash].bundle.js',
    filename: "js/[name].js",
    asyncChunks: true,
    assetModuleFilename: "images/[name][ext]",
    // assetModuleFilename: "images/[contenthash][ext][query]",
    // assetModuleFilename: "src/assets/images/[name].[ext]",
    publicPath: isProduction ? "./" : "/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    port: 3000,
    open: true,
    openPage: 'index.html',
  },
  resolve: {
    alias: {
      // page: path.resolve(__dirname, "src/page/"),
      // css: path.resolve(__dirname, "src/css/"),
      // images: path.resolve(__dirname, "src/images/"),
      // fonts: path.resolve(__dirname, "src/fonts/"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: {
    minimize: false, // 禁用代碼壓縮，保持可讀性
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|)$/,
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset",
        generator: {
          filename: "images/[name][ext]",
          // filename: "images/[contenthash][ext][query]",
        },
      },
    ],
  },
  // devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["vendor", "index"],
      filename: "index.html",
      template: "src/page/index.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      chunks: ["vendor", "list"],
      filename: "list.html",
      template: "src/page/list.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      chunks: ["vendor", "tagList"],
      filename: "tagList.html",
      template: "src/page/tagList.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      chunks: ["vendor", "article"],
      filename: "article.html",
      template: "src/page/article.html",
      minify: false,
    }),
    new MiniCssExtractPlugin({
      // filename: 'main.[hash].css'
      // filename: 'css/main.css'
      filename: "css/[name].css",
      // chunkFilename: 'css/vendor.css'
    }),
    new CleanWebpackPlugin(),
  ],
};
