define([
    'jquery',
    'underscore',
    'backbone',
    'config'
], function($, _, Backbone, config){
    
    var OrderModel = Backbone.Model.extend({
        urlRoot: config.apiUrl + '/order/'
    });
    
    return OrderModel;
});