define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'handlebars',
    'text!authTemplate',
    'authModel',
    'user_model'
],
function($, _, Backbone, Marionette, Handlebars, authTemplate, authModel, UserModel){
    var authView = Marionette.ItemView.extend({
        template: Handlebars.compile(authTemplate),
        className: 'row',

        events: {
            'click #js-auth-data button.js-submit-btn': 'authorize'
        },
        
        initialize: function () {
            this.model = new authModel();
        },
        
        authorize: function(evt){
            evt.preventDefault();
            var providedCredentials = {
                email: $('#js-auth-data input.js-email-input').val(),
                password: $('#js-auth-data input.js-password-input').val()
            }
            this.model.set(providedCredentials);
            this.model.save()
                .done(function(data, textStatus, jqXHR){
                    var authToken = data.token;
                    $.ajaxSetup({
                        headers: { 'Authorization': 'Token ' + authToken }
                    });
                    
                    var user = new UserModel(data);
                    var App = require('app');
                    App.currentUser = user;
                })
                .fail(function(){
                    
                });
        }
    });
    
    return authView;
});