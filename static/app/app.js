define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'orderView'
], function($, _, Backbone, Marionette, OrderView){
    var App = new Marionette.Application();
    
    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            'order': 'orderRoute',
            'order/new': 'newOrderRoute'
        }
    });
    
    var API = {
        orderRoute: function(){
            App.content.show(new OrderView());
        },
        
        newOrderRoute: function(){
            
        }
    }

    App.on('start', function(){
        App.addRegions({
            content: '#content'
        });
        
        this.router = new Router({
            controller: API
        });
        
        Backbone.history.start();
    });
    
    return App;
});