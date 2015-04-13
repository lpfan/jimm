require.config({
    baseUrl: 'static/app',
    paths: {
        // Api config
        config: '../config',
        // Third-Party Libraries
        jquery: 'lib/jquery-1.11.2',
        json2: 'lib/json2',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        handlebars: 'lib/handlebars',
        marionette: 'lib/backbone.marionette',
        text: 'lib/requirejs-text',
        // Views
        orderView: 'views/order_view',
        authView: 'views/auth_view',
        registerView: 'views/register_view',
        dashboard_view: 'views/dashboard_view',
        // Templates
        orderContentTemplate: 'templates/order_template.hb',
        authTemplate: 'templates/auth_template.hb',
        registerTemplate: 'templates/register_template.hb',
        dashboard_template: 'templates/dashboard_template.hb',
        // Collections,
        orderCollection: 'collections/order',
        // Model,
        orderModel: 'models/order',
        authModel: 'models/auth',
        clientModel: 'models/client',
        user_model: 'models/user',
    },
    
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["jquery", "underscore", "json2"],
            exports: "Backbone"
        }
    }
});

require([
    'app'
], function (App) {
    App.start();
});
