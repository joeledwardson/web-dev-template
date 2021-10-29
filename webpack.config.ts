import * as path from 'path';
import * as webpack from 'webpack';
import * as wbplugin from 'html-webpack-plugin';
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: "development",
  entry: './app/index.tsx',
  devtool: "source-map",
  devServer: {
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // https://webpack.js.org/configuration/module/#condition
        use: 'ts-loader', // https://webpack.js.org/loaders/
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          'style-loader',
          'css-loader', 
          'sass-loader'
        ]
     }
    ]
  }, // following webpack typescript guide: https://webpack.js.org/guides/typescript/ 
  // webpack groups files and folders into "modules" for processing
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'condensed_output.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new wbplugin({
      template: path.join(__dirname, "app", "index.html"),
    })
  ]
};

export default config;