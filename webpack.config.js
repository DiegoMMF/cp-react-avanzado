import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

export default {
  output: {
    filename: 'app.bundle.js',
    path: path.resolve('public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
    ]
  }
}
