var express =require('express');

var path = require('path');

var app =express();


var router = require('./routers/center.js');

app.set('env',(process.env.NODE_ENV || 'pro').toLowerCase());

app.set('port',(process.env.PORT || 3000));

//以后在优化静态文件位置  
app.use(express.static(path.resolve('./build/static')));

if(app.get("env") === "dev"){
  var  webpackDevMiddleware = require("webpack-dev-middleware");
  var  webpack = require("webpack");
  var webpackConfig = require("../scripts/client.dev.js");
  var webpackHotMiddleware = require('webpack-hot-middleware');
   var config=webpack(webpackConfig);
  app.use(webpackDevMiddleware(config,{
        publicPaht:"/"
  }));
  app.use(webpackHotMiddleware(config));
}   

router(app);

app.listen(app.get('port'),()=>{
  console.log('server started at : http://localhost:' +app.get('port')+"/");
});
