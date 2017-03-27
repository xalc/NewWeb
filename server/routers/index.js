var express =require('express');
var router =express.Router();

router.get('/',(req,res,next)=>{
  console.log("/ route called");
  res.send("static file not found");
})
module.exports =router;
