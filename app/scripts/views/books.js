var Backbone = require('backbone');
var $ = require('jquery');

var BookFormView = Backbone.View.extend({
  tagName: 'form',
  template: bookFormTemplate,
  events: {
    'submit': 'contactForm'
  },
  render: function(){
    var renderedHTML = this.template();
    this.$el.html(renderedHTML);
    return this;
  },

  bookForm: function(event){
    event.preventDeault();
    this.collection.create({
      name: $('name').val(),
      publish: $('publish').val(),
    });
  },
});

var bookListView = Backbone.View.extend({
  tagName: 'ul',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  render: function(){
      return this;
  },
  renderItem: function(bookId){
    var book = new BookItemView({model: book});
    this.$el.append(book.render().el);
  },

});

module.exports =
''
