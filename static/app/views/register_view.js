define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'marionette',
    'text!registerTemplate',
    'clientModel'
], function($, _, Backbone, Handlebars, Marionette, registerTemplate, ClientModel){
    
    var registerView = Marionette.ItemView.extend({
        template: Handlebars.compile(registerTemplate),
        className: 'row',
        events: {
            'click #js-register-data button.js-submit-btn': 'registerClient'
        },
        registerClient: function(evt){
            evt.preventDefault();
            var data = {
                username: $('#js-register-data input.js-username-input').val(),
                email: $('#js-register-data input.js-email-input').val(),
                password: $('#js-register-data input.js-password-input').val(),
                phone: $('#js-register-data input.js-phone-input').val()
            };
            
            var client = new ClientModel();
            client.set(data);
            client.save()
        }
    });
    
    return registerView;
});