define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'orderView',
    'authView',
    'registerView',
    'authModel',
    'dashboard_view',
], function($, _, Backbone, Marionette, OrderView, authView, RegisterView, AuthModel, DashboardView){
    var App = new Marionette.Application();
    
    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            'order': 'orderRoute',
            'order/new': 'newOrderRoute',
            'auth': 'authRoute',
            'register': 'registerRoute',
            'dashboard': 'dashboardRoute'
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
        },
        
        registerRoute: function(){
            App.content.show(new RegisterView());
        },
        
        dashboardRoute: function(){
            App.content.show(new DashboardView());
        }
    };
    
    App.on('index', function(){
        this.navigate('order');
    });
    
    App.on('auth', function(){
        this.navigate('auth');
        API.authRoute();
    });
    
    App.on('register', function(){
        this.navigate('register');
        Api.registerRoute();
    });
    
    App.on('dashboard', function(){
        this.navigate('dashboard');
        API.dashboardRoute();
    });
    
    App.on('order', function(){
        this.navigate('order');
        API.orderRoute();
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
        
        if(this.getCurrentRoute() === ""){
            if(localStorage['authToken']){
                this.trigger('dashboard');
            } else {
                this.trigger('order');
            }
        }
    });
    
    return App;
});