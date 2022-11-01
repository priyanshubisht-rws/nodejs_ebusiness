const {login,updateProfile,getUserById} = require('./user.service')
const {} = require("jsonwebtoken")
module.exports = {
    loginUser: (req,res) => {
        const body =req.body;
        login(body.username, (err,results)=> {
            if(err)
            {
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
            if(body.password == results.password)
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
    },
    updateUser: (req,res) => {
        const body =req.body;
        updateProfile(body, (err,results)=> {
            if(err)
            {
                return res.status(500).json({
                    success:0,
                    message:'Something went wrong'
                })
            }
            return res.status(200).json({
                    success:1,
                    message:"Updated Successfully",
                 });
            
            
        })
    },
    getUser: (req,res) => {
        const emp_id =req.params.id;
        getUserById(emp_id, (err,results)=> {
            if(err)
            {
                return res.status(500).json({
                    success:0,
                    message:'Something went wrong'
                })
            }
            if(!results)
            {
                return res.status(200).json({
                    success:0,
                    message:'record not found'
                })
            }
            return res.status(200).json({
                    success:1,
                    data:results,
                 });
            
            
        })
    }
}