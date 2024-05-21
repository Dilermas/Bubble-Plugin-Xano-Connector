function(instance, properties, context) {
    
    let data = instance.data,
        publish = instance.publishState,
        trigger = instance.triggerEvent;
    
    data.loadQuery = properties.load_data;
    data.autoRefresh = properties.auto_refresh;
    
    if (!data.xano) {
        
        data.init(properties.group_url);
        
    }
    
    // Check if endpoint starts with / and add one if it doesn't
    if (properties.endpoint[0] !== "/") {
        data.endpoint = `/${properties.endpoint}`
    } else {
        data.endpoint = properties.endpoint;
    }
    
    data.returnDataType = !properties.data_type === false;
    
    if (properties.parameters) {
        
        data.params = JSON.parse(properties.parameters);
        
    } else {
        
        data.params = {}
        
    }
    
    if (properties.headers) {
        
        data.headers = JSON.parse(properties.headers);
        
    } else {
        
        data.headers = {}
        
    }
    
    data.query()


}