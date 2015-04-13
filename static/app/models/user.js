define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'localstorage',
    'config'
], function($, _, Backbone, Marionette, config){
    var currentUser = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage(config.currentUserKey)
    });
    return currentUser;
});