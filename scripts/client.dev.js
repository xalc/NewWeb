var path =require('path')

var HtmlWebPackPlugin =require('html-webpack-plugin'); 

var webpack = require('webpack');

module.exports ={


  entry: [
            "react-hot-loader/patch",
            "webpack-hot-middleware/client",
            path.resolve('./client/app.js')
      ],
  output:{
    filename:"js/frontend.js",
    path:path.resolve('./build/static')
  },
  devServer:{
      hot:true,
      inline: true
  },
   devtool: "inline-source-map", 
   
  module:{
    rules:[{
          test:/\.jsx?$/,
          exclude:/node_modules/,
          use:[
            {
              loader:'babel-loader',
              options:{
                presets:[['es2015',{"modules":false}],'react']
              }
            }
          ]
      },{
        test : /\.css$/,
        use:[
          'style-loader',
          'css-loader?modules'
        ]
      }
      ]
  },
  plugins:[
    new HtmlWebPackPlugin({
      template:'./client/temple.html',
    }),
    
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin()
    
  ]
}
