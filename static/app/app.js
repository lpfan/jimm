define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'orderView',
    'authView',
    'authModel'
], function($, _, Backbone, Marionette, OrderView, authView, AuthModel){
    var App = new Marionette.Application();
    
    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            'order': 'orderRoute',
            'order/new': 'newOrderRoute',
            'auth': 'authRoute'
        }
    });
    
    var navigate = function(route, options){
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    var getCurrentRoute = function(){
        return Backbone.history.fragment
    };
    
    var API = {
        orderRoute: function(){
            App.content.show(new OrderView());
        },
        
        newOrderRoute: function(){
            
        },
        
        authRoute: function(){
            var view = new authView();
            App.content.show(view);
        }
    };
    
    App.on('index', function(){
        this.navigate('order');
    });
    
    App.on('auth', function(){
        this.navigate('auth');
        Api.authRoute();
    });

    App.on('start', function(){
        App.addRegions({
            content: '#content'
        });
        
        this.router = new Router({
            controller: API
        });
        
        this.navigate = navigate;
        
        this.getCurrentRoute = getCurrentRoute;
        
        Backbone.history.start();
        
        if(this.getCurrentRoute === ""){
            this.trigger('order');
        }
    });
    
    return App;
});