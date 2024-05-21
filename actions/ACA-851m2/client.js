function(properties, context) {


	window.xano.setAuthToken(properties.auth_token);
    
    if (properties.get_user_details) {
        
        window.xanoGetUser();
    
    } 

}