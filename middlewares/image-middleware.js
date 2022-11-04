const multiparty= require('multiparty')
const fs = require('fs');
const IMAGE_UPLOAD_DIR = './public/images'
module.exports = {
    storage:function(req, callback){
        let bc_picture=null;
        let bc_qr_image=null;
        let bc_mobile=null;
        let bc_mobile2=null;
        let bc_landline=null;
        let bc_linkedin=null;
        let bc_twitter=null;
        let bc_instagram=null;
        let bc_office_address_type=null;
        let emp_id=null;
        let bc_name=null;
        let bc_email=null;
        let bc_designation=null;
        let bc_status=null;
        let bc_added_on_date=null;
        let bc_added_on_datetime=null;
        
        const form = new multiparty.Form({uploadDir: IMAGE_UPLOAD_DIR})
        form.parse(req, async function(err, fields, files){
            if(err) callback(err)
            if(files.bc_picture[0]['originalFilename']=="")
            {
                fs.unlinkSync(files.bc_picture[0]['path']);
                
            }
            else
            {
                bc_picture=files.bc_picture[0]['path']
               
            }

            bc_qr_image=fields.bc_qr_image[0];
            bc_mobile=fields.bc_mobile[0];
            bc_mobile2=fields.bc_mobile2[0];
            bc_landline=fields.bc_landline[0];
            bc_linkedin=fields.bc_linkedin[0];
            bc_twitter=fields.bc_twitter[0];
            bc_instagram=fields.bc_instagram[0];
            bc_office_address_type=fields.bc_office_address_type[0];
            template_style=fields.template_style[0];
            emp_id=fields.emp_id[0];
            bc_name=fields.bc_name[0];
            bc_email=fields.bc_email[0];
            bc_designation=fields.bc_designation[0];
            bc_status=fields.bc_status[0];
            bc_added_on_date=fields.bc_added_on_date[0];
            bc_added_on_datetime=fields.bc_added_on_datetime[0];
            body = {
                'bc_mobile': bc_mobile,
                'bc_mobile2': bc_mobile2,
                'bc_landline': bc_landline,
                'bc_linkedin': bc_linkedin,
                'bc_twitter': bc_twitter,
                'bc_instagram': bc_instagram,
                'bc_office_address_type': bc_office_address_type,
                'template_style': template_style,
                'emp_id': emp_id,
                'bc_name': bc_name,
                'bc_email': bc_email,
                'bc_designation': bc_designation,
                'bc_status': bc_status,
                'bc_added_on_date': bc_added_on_date,
                'bc_added_on_datetime': bc_added_on_datetime,
                'bc_picture':bc_picture,
                'bc_qr_image':bc_qr_image
            };

            return callback(body);
        })
      
}
}