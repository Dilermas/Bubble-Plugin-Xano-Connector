function(instance, context) {

    const 	i = instance,
          c = context;

    let data = i.data,
        publish = i.publishState,
        trigger = i.triggerEvent;

    data.messages = [];
    data.payloads = [];

    xanoRealtimeListeners.push(instance);

    data.message_received = function(message) {


        let payload = message.payload

        if (typeof payload === 'object' || Array.isArray(payload)) {

            payload = JSON.stringify(message.payload)

        }

        let history_payloads = data.payloads;
        let history_messages = data.messages;

        history_payloads.unshift(payload);
        history_messages.unshift(JSON.stringify(message));

        data.messages = history_messages.slice(0,data.history_retention);
        data.payloads = history_payloads.slice(0,data.history_retention);

        publish('payloads', data.payloads);
        publish('messages', data.messages);

        switch (message.command) {

            case '[Realtime] Message':

                trigger('message_received');

            case '[Realtime] Event':

                trigger('event_received');

                break;
            default:

                               }

    }
    
    publish('return_type','')

}