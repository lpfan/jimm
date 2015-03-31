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
        // Templates
        orderContentTemplate: 'templates/order_template.hb',
        // Collections,
        orderCollection: 'collections/order',
        // Model,
        orderModel: 'models/order'
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
