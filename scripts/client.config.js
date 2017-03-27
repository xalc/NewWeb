var path =require('path')

var HtmlWebPackPlugin =require('html-webpack-plugin'); 

module.exports ={


  entry: path.resolve('./client/app.js'),
  output:{
    filename:"js/frontend.js",
    path:path.resolve('./build/static'),
    publicPath:'/'
  },
  module:{
    rules:[{
          test:/\.jsx?$/,
          exclude:/node_modules/,
          use:[
            {
              loader:'babel-loader',
              options:{
                presets:['es2015','react']
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
    
  ]
}
