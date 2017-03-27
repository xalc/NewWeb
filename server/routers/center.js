var index =require('./index.js');

module.exports=(app)=>{
  app.use('/',index);
}
