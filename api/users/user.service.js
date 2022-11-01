const pool= require('../../config/database')



module.exports = {
    login:(data,callback) => {
        console.log(data)
        pool.query(`select * from employees_data where emp_email = ?`,[data], (error, results) => {
            if(error)
            {
                callback(error)
            }
            return callback(null, results[0])
        })   
    }
}