function(properties, context) {
       
    let body = {

        'email': properties.email,
        'password': properties.password

    }
    
    properties.additional_fields.map(x=>{
    	
        body[x.key] = x.value;
    
    })
    
    window.xanoLogUserIn(body);






}