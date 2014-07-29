var app = app || {};

app.PostView = Backbone.View.extend({
  el: '#main',

  tagName: 'img',

  events: {
    // 'mouseover': 'viewBiggerImg',
    // 'click': 'backSmallImg'
  },

  initialize: function() {
    this.render();

  },

  render: function(){
    var post_html = Handlebars.compile(app.templates.postView);
    var copy = post_html( this.model.toJSON() );
    this.$el.html( copy );

  },

  viewBiggerImg: function() {
    this.$('#small_imgs img')
      .removeClass('small')
      .addClass('big')
  },

  backSmallImg: function(){
    this.$('#small_imgs img')
      .removeClass('big')
      .addClass('small')
  }

});