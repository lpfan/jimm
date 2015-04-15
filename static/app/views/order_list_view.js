define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'order_item_view',
], function($, _, Backbone, Marionette, OrderView){
    var OrderListView = Marionette.CollectionView.extend({
        tagName: 'ul',
        childView: OrderView
    });
    
    return OrderListView;
});