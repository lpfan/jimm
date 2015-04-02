define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'handlebars',
    'text!orderContentTemplate',
    'orderModel'
],  function($, _, Backbone, Marionette, Handlebars, orderContentTemplate, orderModel){
    
    var OrderView = Marionette.ItemView.extend({
        template: Handlebars.compile(orderContentTemplate),
        
        events: {
            'click button.js-submit': 'addNewOrder' 
        },
        
        addNewOrder: function(evt){
            evt.preventDefault();
            var orderBike = $('.js-new-order-form #order-bike').val(),
                orderDescription = $('.js-new-order-form #order-description').val();
            
            var newOrder = new orderModel({
                bike: orderBike,
                description: orderDescription
            });
            
            newOrder.save();
        }
        
    });
    
    return OrderView;
})