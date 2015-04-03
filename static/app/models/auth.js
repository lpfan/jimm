define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'config'
], function($, _, Backbone, Marionette, config){
    var AuthModel = Backbone.Model.extend({
        urlRoot: config.apiUrl + '/token-auth/',
        defaults: {
            'email': '',
            'password': ''
        }
    });
    
    return AuthModel;
});