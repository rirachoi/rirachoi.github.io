var app = app || {};

app.PostView = Backbone.View.extend({
  el: '#main',

  events: {
    'click .btnDescription' : 'viewImgDescription',
    'click .btnBack' : 'backToSmallImg',
    'keypress .small_description': 'backToPlain'
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

  viewImgDescription: function(event) {
    var $clickedImg = $(event.target);
    console.log($clickedImg);
    // console.log(this.model.attributes.images);
    var image_array = this.model.attributes.images
    //$clickedImg.attr('src', 'assets/image_hover/'+ );
    //$clickedImg.toggleClass('big');
    $('.small').hide();
    $('.small_description').fadeIn('slow').toggleClass('big');
    $('.btnDescription').text('Back!').toggleClass('btnBack');
  },

  backToPlain: function(key){
    if (key.which === 27) {
      console.log('keypress');
       $('.small').fadeIn('slow');
       $('.small_description').hide();
       // this.close();
    }
  },

  backToSmallImg: function(event){
    $('.small').fadeIn('slow');
    $('.small_description').hide();
    $('.btnDescription').text('Description');
  }


});