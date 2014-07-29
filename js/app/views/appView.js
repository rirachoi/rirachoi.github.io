var app = app || {};

/////app's Views
app.AppView = Backbone.View.extend({
  el: '#main',

  initialize: function(){
    console.log('AppView initialize');

  },

  render: function(){
    this.$el.html( app.templates.appView);
    this.collection.each(function(p){
      var view = new app.PostListView({ model: p });
      $('#projects').append( view.render() );
    });
    // $el is jQuery version of el!
  }
});