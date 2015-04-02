define([
    'jquery',
    'underscore',
    'backbone',
    'orderModel',
    'config'
], function($, _, Backbone, OrderModel, config){
    var OrderCollection = Backbone.Collection.extend({
        url: config.apiUrl + '/order/',
        model: OrderModel
    });
    
    return OrderCollection;
});