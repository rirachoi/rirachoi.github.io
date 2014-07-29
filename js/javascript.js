var app = app || {};

$(document).ready(function(){
/////templates is just a dictionary so lowcase
  app.templates = {
    appView: $('#app-template').html(),
    postListView: $('#projectsList-template').html(),
    //  $('list-template').html()  == <span>{{ title }}</span>
    postView: $('#project-template').html()

  };

  app.router = new app.Router();
  Backbone.history.start();
});