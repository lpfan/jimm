define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'handlebars',
    'text!orderContentTemplate'
],  function($, _, Backbone, Marionette, Handlebars, orderContentTemplate){
    
    var OrderView = Marionette.ItemView.extend({
        template: Handlebars.compile(orderContentTemplate)
    });
    
    return OrderView;
})