import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
