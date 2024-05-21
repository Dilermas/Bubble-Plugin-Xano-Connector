function(instance, properties, context) {
    
    let data = instance.data,
        publish = instance.publishState,
        trigger = instance.triggerEvent;
   
    // Post to the login endpoint
    
    let body = {
        
        'email': properties.email,
        'password': properties.password
        
    }
    
    window.xanoLogUserIn(body);

}