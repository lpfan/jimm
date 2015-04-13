define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'handlebars',
    'text!dashboard_template'
], function($, _, Backbone, Marionette, Handlebars, dashboardTemplate){
    var DashboardView = Marionette.LayoutView.extend({
        template: Handlebars.compile(dashboardTemplate),
        className: 'row',
        
        regions: {
            order_detail: "#order-detail"
        },
        
        serializeData: function(){
            var item = this.model.toJSON();
            return item;
        },
        
        initialize: function(){
            this.model = 
        }
    });
    return DashboardView;
});