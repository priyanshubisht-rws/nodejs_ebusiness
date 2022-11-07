const pool= require('../../config/database')



module.exports = {
    login:(data,callback) => {
        pool.query(`select * from employees_data where emp_email = ?`,[data], (error, results) => {
       // console.log(x.sql)
            if(error)
            {
                callback(error)
            }
            return callback(null, results[0])
        })   
    },
    updateProfile:(data,callback) => {
        pool.query(`update dbcp_bc_entries set bc_mobile = ?, bc_mobile_2=?, bc_landline=?, bc_linkedin=?, bc_twitter=?, bc_instagram=?, bc_office_address_type=?, 
        template_style=?, bc_name=?, bc_email=?, bc_designation=?, bc_status=?, bc_picture=?,bc_qr_image=?, bc_added_on_date=?, bc_added_on_datetime=? where emp_id=?`,
        [
            data.bc_mobile,
            data.bc_mobile_2,
            data.bc_landline,
            data.bc_linkedin,
            data.bc_twitter,
            data.bc_instagram,
            data.bc_office_address_type,
            data.template_style,
            data.bc_name,
            data.bc_email,
            data.bc_designation,
            data.bc_status,
            data.bc_picture,
            data.bc_qr_image,
            data.bc_added_on_date,
            data.bc_added_on_datetime,
            data.emp_id,
        ], (error, results) => {
            if(error)
            {
                callback(error)
            }
            return callback(null, results[0])
        })   
    },
    addProfile:(data,callback) => {
      pool.query(`insert into dbcp_bc_entries (emp_id,bc_name,bc_email,bc_designation,bc_status,bc_picture,bc_qr_image,bc_added_on_date,bc_added_on_datetime,bc_mobile,bc_mobile_2,bc_landline,bc_linkedin,bc_twitter,bc_instagram,bc_office_address_type,template_style) 
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [
            data.emp_id,
            data.bc_name,
            data.bc_email,
            data.bc_designation,
            data.bc_status,
            data.bc_picture,
            data.bc_qr_image,
            data.bc_added_on_date,
            data.bc_added_on_datetime,
            data.bc_mobile,
            data.bc_mobile_2,
            data.bc_landline,
            data.bc_linkedin,
            data.bc_twitter,
            data.bc_instagram,
            data.bc_office_address_type,
            data.template_style,
        ], (error, results) => {
           
            if(error)
            {
                callback(error)
            }
            return callback(null, results[0])
        })   
    },
    getUserById:(id,callback) => {
        pool.query(`select * from dbcp_bc_entries where emp_id=?`,
        [id], (error, results) => {
            if(error)
            {
                callback(error)
            }
            return callback(null, results[0])
        })   
    }
}