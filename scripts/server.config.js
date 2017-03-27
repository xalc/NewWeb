var path =require('path');
var nodeModules = {};
var fs =require('fs');
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });
const env =process.env.NODE_ENV || "pro";
const isDev =  env=== "dev";
module.exports ={
  entry: path.resolve('./server/app.js'),
  output:{
    filename:"backend.js",
    path:path.resolve('./build')
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
                presets:['es2015']
              }
            }
          ]
      }
    ]
  },
  watch:isDev,
  target:'node',
  externals:nodeModules

}
