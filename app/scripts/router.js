var $ = require('jquery');
var Backbone = require('backbone');
var views = require('./views/books');
var models = require('./models/books');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'detail/:id/': 'detail',
  },
  initialize: function(options){
    this.collection = new models.BookCollection();
    this.collection.fetch;
    bookCollection.add([{
      'name': 'Javascript: The Good Parts',
      'publish': 'Random House',
      'url': 'https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742'
    }]);
  }
  index: function(){
    var bookListing = views.bookListView({collection: this.collection});
    $('.app').html(bookListing.render().el);
  },
  detail: function(bookId){
    var book = this.collection.find({'id': bookId});
    var bookDetail = views.BookDetailView({model: book});
    $('.app').html(this.template());
    },
});

var router = new Router;
