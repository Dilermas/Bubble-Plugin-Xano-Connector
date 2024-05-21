function(properties, context) {

    try{

        const channel = window.xanoRealtime[properties.channel].channel;

        channel.message(properties.message);

    } catch(err){}
}