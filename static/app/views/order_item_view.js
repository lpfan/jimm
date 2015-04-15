define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'handlebars',
    'text!order_item_template',
], function($, _, Backbone, Marionette, Handlebars, OrderTemplate){
    var ItemView = Marionette.ItemView.extend({
        tagName: 'li',
        
        template: Handlebars.compile(OrderTemplate),
        
        serializeData: function(){
            var item = this.model.toJSON();
            return item;
        },
    });
    
    return ItemView;
});