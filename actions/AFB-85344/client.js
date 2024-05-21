function(properties, context) {
        

    try{

        let exists = !window.xanoRealtime[properties.channel] == false;
        // console.log(properties.channel + " exists: " + exists)
        const channel = window.xano.channel(properties.channel, JSON.parse(properties.channel_options) || {});

        window.xanoRealtime[properties.channel] = {channel: channel};

        if (exists == false) {

            channel.on((message) => {

                xanoRealtimeListeners.filter(x=>x.data.channel == properties.channel || x.data.channel == null).map(y=>{

                    y.data.message_received(message);

                });


            });
        }

    } catch(err) {}

}