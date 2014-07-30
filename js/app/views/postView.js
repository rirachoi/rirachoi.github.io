var app = app || {};

app.PostView = Backbone.View.extend({
  el: '#main',

  events: {
    'click': 'viewBiggerImg'
  },

  initialize: function() {
    this.render();
  },

  render: function(){
    var post_html = Handlebars.compile(app.templates.postView);
    var copy = post_html( this.model.toJSON() );
    this.$el.html( copy );

  },

  viewBiggerImg: function(event) {
    var $clickedImg = $(event.target);
    $clickedImg.toggleClass('big');
  }


});