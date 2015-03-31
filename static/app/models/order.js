define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    
    var OrderModel = Backbone.Model.extend({
        urlRoot: ''
    });
    
    return OrderModel;
});