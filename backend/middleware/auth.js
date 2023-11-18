const jwt = require('jsonwebtoken')
const config =require('config')

 const auth=async (req,res,next)=>{
  let token="";
  if(req.headers.authorization&&req.headers.authorization.startsWith("Bearer")){
    try{
      token=req.headers.authorization.split(" ")[1]
      const decoded =jwt.verify(token,process.env.SECRET_KEY);
      req.user = decoded;
      next();
    }catch(error){
      res.status(400).send('Invalid Token')
    }
  }else{
    return res.status(401).send('Access denied.No token Provider')
  }

}

module.exports=auth;

