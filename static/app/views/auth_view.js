define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'handlebars',
    'text!authTemplate',
    'authModel'],
function($, _, Backbone, Marionette, Handlebars, authTemplate, authModel){
    var authView = Marionette.CompositeView.extend({
        template: Handlebars.compile(authTemplate)
    });
    
    return authView;
});