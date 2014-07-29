var app = app || {};

app.PostListView = Backbone.View.extend({
  //crearing brend new li
  tagName: 'div id="main_img"',
  events: {
    'click': 'view',
    'mouseover': 'honverEffect'
  },

  initialize: function(){

  },

  render: function(){
    // we wanna get all data with json -> but we will get actual OBJECTs
    var list_html = Handlebars.compile(app.templates.postListView);
    var copy = list_html( this.model.toJSON() );

    this.$el.html( copy );

    return this.el;
  },

  view: function(){
    //console.log('you clicked a post list item');
    app.router.navigate('posts/' + this.model.get('id'), true );
    // true means naviagte me and run code any code with it
  },

  honverEffect: function(){

  }

});