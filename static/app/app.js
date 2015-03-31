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
            'order': 'orderRoute'
        },

        orderRoute: function () {
            
        }
    });
    
    var API = {
        orderRoute: function(){
            App.content.show(new OrderView());
        }
    }
    
    App.addInitializer(function(){
        App.addRegions({
            content: '#content'
        });
        
        this.router = new Router({
            controller: API
        });
        
    });
    
    App.on('start', function(){
        Backbone.history.start();
    });
    
    return App;
});