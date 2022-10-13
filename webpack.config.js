import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  module: {
    rules: [
      /* {
        test: /\.html$/i,
        loader: "html-loader",
      }, */
      /* {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      }, */
      {
        test: /\.html$/,
        use: 'html-loader'
      },
  ]
  }
}
