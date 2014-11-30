$(function ($) {
    var items = [
        {title: "App template 000", id: 1, contain: [1,3,6], price: 25.5, url: "http://placehold.it/500x500&amp;text=Thumbnail", weight: 122},
        {title: "App template 1", id: 2, contain: [3,9], price: 100, url: "http://dummyimage.com/500.png/09f/fff",  weight: 950},
        {title: "App template 2", id: 3, price: 45, url: "http://dummyimage.com/500.png/f9f/000",  weight: 350},
        {title: "App template 3", id: 4, price: 38, url: "http://dummyimage.com/500.png/f95/000",  weight: 220},
        {title: "App template 1", id: 5, price: 100, url: "http://dummyimage.com/500.png/f15/000",  weight: 950},
        {title: "App template 2", id: 6, price: 27, url: "http://dummyimage.com/500.png/115/fff",  weight: 180},
        {title: "App template 1", id: 7, price: 109, url: "http://dummyimage.com/500.png/41f/fff",  weight: 840},
        {title: "App template 2", id: 8, price: 41, url: "http://dummyimage.com/500.png/ff0f/000",  weight: 418},
        {title: "App template 1", id: 9, price: 49, url: "http://dummyimage.com/500.png/0f9/fff",  weight: 567},
        {title: "App template 2", id: 10, price: 62, url: "http://dummyimage.com/500.png/099/fff",  weight: 710},
        {title: "App template 1", id: 11, price: 46, url: "http://dummyimage.com/500.png/819/fff",  weight: 380},
        {title: "App template 2", id: 12, price: 55, url: "http://dummyimage.com/500.png/810/fff",  weight: 412},
        {title: "App template 1", id: 13, price: 12, url: "http://dummyimage.com/500.png/159/fff",  weight: 67},
        {title: "App template 2", id: 14, price: 131, url: "http://dummyimage.com/500.png/905/fff",  weight: 1012}

      ];

    var Item = Backbone.Model.extend({
        defaults: function () {
          return {
            title:"Title",
            price:"Price",
            weight: "Weight",
            url:"http://dummyimage.com/500.png/819/fff"
          };
        }
    });

    var Items = Backbone.Collection.extend({
       model:Item
    });

    var ItemView = Backbone.View.extend({
        // tagName:"div",
        // className:"item-container",
        template:$("#test-template").html(),

        render:function () {
            var tmpl = Handlebars.compile(this.template); //tmpl is a function that takes a JSON object and returns html

            this.$el.html(tmpl(this.model.toJSON())); //this.el is what we defined in tagName. use $el to get access to jQuery html() function
            return this;
        }
    });

 var ItemsView = Backbone.View.extend({
        el:$("#app"),

        initialize:function(){
            this.collection = new Items(items);
            this.render();
        },

        render: function(){
            var that = this;
            _.each(this.collection.models, function(item){
                that.renderItem(item);
            }, this);
        },

        renderItem:function(item){
            var itemView = new ItemView({
                model: item
            });
            this.$el.append(itemView.render().el);
        }
    });

    var itemsView = new ItemsView();

});