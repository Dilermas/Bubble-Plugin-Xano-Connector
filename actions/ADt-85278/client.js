function(properties, context) {
    
    let body = {

        'email': properties.email,
        'password': properties.password,
        'name_first': properties.name_first,
        'name_last': properties.name_last

    }
    
    properties.additional_fields.map(x=>{
    	
        body[x.key] = x.value;
    
    })

    window.xanoSignUserUp(body);





}