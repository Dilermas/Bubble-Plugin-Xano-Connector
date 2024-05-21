function(properties, context) {

    try {

        return JSON.parse(localStorage.getItem('xano_user')).nameLast;

    } catch(err) {

    }

}