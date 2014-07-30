/////app's Models
var app = app || {};

app.Post = Backbone.Model.extend({
  defaults: {
    id: 0,
    title: 'New Project',
    application: 'application',
    main_image: "New Project Main Image",
    images: []


  }

});