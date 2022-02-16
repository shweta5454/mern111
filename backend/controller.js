const UserData=require('./model');

exports.UserData=(req,res)=>{

   const {
       user,
       userName
   }=req.body;
  
   const UserObj=new UserData({
       
     user:user,
    userName:userName
   })

   console.log(UserObj)
        UserObj.save().then((result)=>{

            res.status(200).json({
                message:"user registred successfully",
                UserData:result
            })
        }).catch((err)=>{

            res.status(500).json({
                
                message:"data fetching failed",
                Error:err
            })
        })
    


}