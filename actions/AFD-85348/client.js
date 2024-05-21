function(properties, context) {

    try{

        const channel = window.xanoRealtime[properties.channel].channel;

        channel.destroy(properties.channel);
        
        delete window.xanoRealtime[properties.channel]
        
    } catch(err){}
}