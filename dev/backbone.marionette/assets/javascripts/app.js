
var App = new Backbone.Marionette.Application();
 
App.addRegions({
  mainRegion: "#content"
});

Item = Backbone.Model.extend({});

Items = Backbone.Collection.extend({
  model: Item
});


OneItemView = Backbone.Marionette.ItemView.extend({
  template: "#test-template",
  tagName: 'div',
  className: 'one_item'
});


AllItemsView = Backbone.Marionette.CompositeView.extend({
  tagName: "table",
  id: "angry_cats",
  className: "table-striped table-bordered",
  template: "#angry_cats-template",
  itemView: OneItemView,
 
  appendHtml: function(collectionView, itemView){
    collectionView.$("tbody").append(itemView.el);
  }
});