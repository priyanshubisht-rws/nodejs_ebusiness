const {login} = require('./user.service')
const {} = require("jsonwebtoken")
module.exports = {
    loginUser: (req,res) => {
        const body =req.body;
        login(body.username, (err,results)=> {
            if(err)
            {
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:'Something went wrong'
                })
            }
            if(!results)
            {
                return res.json(
                    {
                        success:0,
                        data:'Invalid Emp Email'
                    }
                )
            }
            if(body.password == results.ID)
            {
                return res.status(200).json({
                    success:1,
                    message:"login successdully",
                    data:results 
                 });
            }
            else
            {
                return res.status(200).json({
                    success:0,
                    message:"Invalid Password",
                 });
            }
            
        })
    }
}