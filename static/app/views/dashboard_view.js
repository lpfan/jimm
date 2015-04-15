define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'handlebars',
    'text!dashboard_template',
    'user_model',
    'order_list_view',
    'order_collection',
], function($, _, Backbone, Marionette, Handlebars, dashboardTemplate, UserModel, OrderListView, OrderCollection){
    var DashboardView = Marionette.LayoutView.extend({
        template: Handlebars.compile(dashboardTemplate),
        className: 'row',
        
        regions: {
            orderDetail: "#order-detail"
        },
        
        initialize: function(){
            var token = localStorage['authToken'];
            this.currentUser = new UserModel().fetch();
            this.orders = new OrderCollection();
            this.orders.fetch();
        },
        
        onRender: function () {
            this.orderDetail.show(new OrderListView({collection: this.orders}));
        }
    });
    return DashboardView;
});