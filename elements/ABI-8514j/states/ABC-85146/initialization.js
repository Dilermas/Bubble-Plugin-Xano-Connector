function(properties, context) {

    try {

        return JSON.parse(localStorage.getItem('xano_user')).nameFirst

    } catch(err) {

    }


}