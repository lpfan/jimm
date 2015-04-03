define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'config'
], function($, _, Backbone, Marionette, config){
    var client = Backbone.Model.extend({
        urlRoot: config.apiUrl + '/register/',
        defaults: {
            email: '',
            password: '',
            phone: ''
        }
    });
    
    return client;
});