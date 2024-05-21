function(instance, properties, context) {
    
    const i = instance,
          p = properties,
          c = context,
          data = i.data,
          publish = i.publishState,
          channel = p.channel_name || null;
    
    data.history_retention = p.history_retention;

    if (data.channel != channel) {
        data.previous_channel = data.channel;
        data.channel = channel;
        data.messages = [];
        data.payloads = [];
        publish('messages',[])
        publish('payloads',[])
    }


}