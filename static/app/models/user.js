define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'config'
], function($, _, Backbone, Marionette, config){
    var currentUser = Backbone.Model.extend({
        urlRoot: config.apiUrl + '/current_user/',
    });
    return currentUser;
});