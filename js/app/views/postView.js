var app = app || {};

app.PostView = Backbone.View.extend({
  el: '#main',

  events: {
    'click': 'viewBiggerImg',
    'keypress': 'backToPlain'
  },

  initialize: function() {
    this.render();
    $('.small_description').hide();

  },

  render: function(){
    var post_html = Handlebars.compile(app.templates.postView);
    var copy = post_html( this.model.toJSON() );
    this.$el.html( copy );

  },

  viewBiggerImg: function(event) {
    var $clickedImg = $(event.target);
    // console.log($clickedImg);
    // console.log(this.model.attributes.images);
    var image_array = this.model.attributes.images
    //$clickedImg.attr('src', 'assets/image_hover/'+ );
    //$clickedImg.toggleClass('big');
    $('.small').hide();
    $('.small_description').fadeIn('slow').toggleClass('big');
  },

  backToPlain: function(key){
    if (key.which === 27) {
      console.log('keypress');
       $('.small').fadeIn('slow');
       $('.small_description').hide();
       // this.close();
    }
  }


});