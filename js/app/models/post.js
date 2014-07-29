/////app's Models
var app = app || {};

app.Post = Backbone.Model.extend({
  defaults: {
    id: 0,
    title: 'New Project',
    application: 'application',
    main_image: "New Project Main Image",
    image1: 'New Project Image',
    image2: 'New Project Image',
    image3: 'New Project Image',
    image4: '',
    image5: '',
    image6: '',
    image7: '',
    image8: '',
    image9: '',
    image10: '',
    image11: ''
  }

});