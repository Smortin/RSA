var Controller = require ('./controller');

module.exports = function(app) {

    app.get('/prueba/:j', Controller.prueba);

    app.get('/publickey', Controller.PublicKey);

    app.post('/sendMsg', Controller.sendMsg);

};