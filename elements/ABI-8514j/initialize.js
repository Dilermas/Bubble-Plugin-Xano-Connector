function(instance, context) {

    let data = instance.data,
        publish = instance.publishState,
        trigger = instance.triggerEvent;



    const i = instance,
          c = context;

    xanoHooks.push(instance);

    data.log_out = function() {

        publish('authToken','');
        publish('refreshToken','');
        publish('name_first','');
        publish('email','');
        publish('name_last','');
        publish('is_logged_in', false);
        publish('custom_response', null);

        trigger('is_logged_out')

        data.loggedIn = false;

    }

    data.set_user = function(user) {

        publish('authToken',localStorage.getItem('AuthToken'));
        publish('refreshToken', user.refreshToken);
        publish('name_first',user.nameFirst);
        publish('name_last', user.nameLast)
        publish('email', user.email);
        publish('custom_response',user.customResponse);
        publish('is_logged_in', !xano.hasAuthToken() == false);

        trigger('is_logged_in')

        data.loggedIn = !xano.hasAuthToken() == false;

    }

    data.error = function(message, code, statusCode) {

        context.reportDebugger(message);

        publish('error_message', message);
        publish('error_code', code);
        publish('status_code', statusCode);
        trigger('threw_an_error');
        
    }



}