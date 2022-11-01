const pool= require('../../config/database')



module.exports = {
    login:(data,callback) => {
        console.log(data)
        pool.query(`select * from dbcp_bc_entries where bc_email = ?`,[data], (error, results) => {
            if(error)
            {
                callback(error)
            }
            return callback(null, results[0])
        })   
    },
    updateUser:(data,callback) => {
        console.log(data)
        var query=pool.query(`update dbcp_bc_entries set bc_mobile = ?, bc_mobile_2=?, bc_landline=?, bc_linkedin=?, bc_twitter=?, bc_instagram=?, bc_office_address_type=?, template_style=? where ID=?`,
        [
            data.bc_mobile,
            data.bc_mobile_2,
            data.bc_landline,
            data.bc_linkedin,
            data.bc_twitter,
            data.bc_instagram,
            data.bc_office_address_type,
            data.template_style,
            data.ID,
        ], (error, results) => {
            if(error)
            {
                callback(error)
            }
            console.log(query.sql);
            return callback(null, results[0])
        })   
    }
}