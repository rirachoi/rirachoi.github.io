var app = app || {};

////// app's Routers
app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'getPost'
  },

  initialize: function(){
    console.log('router initialize');
    //because this is actual collection so lowcase
    app.posts = new app.Posts([
      new app.Post({
        id: 1, title: 'Trip Tracker',
        application: "Ruby (week2 day4)",
        main_image: "assets/image/mta/main.png",
        image1: "assets/image/mta/result.png",
        image2: "assets/image/mta/result_with_map.png",
        image3: "assets/image/mta/map.gif"
      }),

      new app.Post({
        id: 2, title: 'Butterflies in AUS',
        application: "Sinatra (week3 day2)",
        main_image: "assets/image/butterflies/main.png",
        image1: "assets/image/butterflies/display.png",
        image2: "assets/image/butterflies/butterfly.png",
        image3: "assets/image/butterflies/display_state.png"
      }),

      new app.Post({
        id: 3, title: 'ALLS Watch',
        application: "Sinatra (week3 day3)",
        main_image: "assets/image/alls_watch/main.png",
        image1: "assets/image/alls_watch/main_with_hover.png",
        image2: "assets/image/alls_watch/list.png",
        image3: "assets/image/alls_watch/category.png",
        image4: "assets/image/alls_watch/category_list.png"
      }),

      new app.Post({
        id: 4, title: 'MS Finder',
        application: "Rails (week4 day1)",
        main_image: "assets/image/ms_finder/main.png",
        image1: "assets/image/ms_finder/movie_search.png",
        image2: "assets/image/ms_finder/quick_result.png",
        image3: "assets/image/ms_finder/quick_result_with_plot.png",
        image4: "assets/image/ms_finder/movie_list.png",
        image5: "assets/image/ms_finder/movie_list_result.png",
        image6: "assets/image/ms_finder/stock_search.png",
        image7: "assets/image/ms_finder/stock_result.png",
      }),

      new app.Post({
        id: 5, title: 'Book Keeper',
        application: "Rails with Database (week4 day3)",
        main_image: "assets/image/book_keeper/main.png",
        image1: "assets/image/book_keeper/main.png",
        image2: "assets/image/book_keeper/books.png",
        image3: "assets/image/book_keeper/book_info.png",
        image4: "assets/image/book_keeper/book_info_with_hover.png",
        image5: "assets/image/book_keeper/authors.png",
        image6: "assets/image/book_keeper/authors_info.png",
        image7: "assets/image/book_keeper/authors_info_with_hover.png"

      }),

      new app.Post({
        id: 6, title: 'SOLUHO Calendar',
        application: "First Project (week5)",
        main_image: "assets/image/soluho_calendar/main.png",
        image1: "assets/image/soluho_calendar/user_calendar.png",
        image2: "assets/image/soluho_calendar/user_event_list.png",
        image3: "assets/image/soluho_calendar/user_details.png",
        image4: "assets/image/soluho_calendar/event_category.png",
        image5: "assets/image/soluho_calendar/int_public_holiday.png",
        image6: "assets/image/soluho_calendar/int_public_holiday_list.png"


      }),

      new app.Post({
        id: 7, title: 'Fireball-Game Part',
        application: "Second Group Project (week8)",
        main_image: "assets/image/fireball/game_main.png",
        image1: "assets/image/fireball/game_lang.png",
        image2: "assets/image/fireball/game_play.png",
        image3: "assets/image/fireball/game_play2.png",
        image4: "assets/image/fireball/game_finish1.png",
        image5: "assets/image/fireball/game_finish2.png",
        image6: "assets/image/fireball/game_finish3.png",
        image7: "assets/image/fireball/game_finish4.png",
        image8: "assets/image/fireball/chat.png",
        image9: "assets/image/fireball/chat_lang.png",
        image10: "assets/image/fireball/edit.png",
        image11: "assets/image/fireball/index.png"


      })

    ]);


  },

  index: function(){
    console.log('this is index page');
    var appView = new app.AppView({ collection: app.posts });
    appView.render();
  },

  getPost: function(id){
    //console.log('this is getPost ' + id);
    var post = app.posts.get(id);
    new app.PostView({ model: post }); // Renders itself via initialize()
  }

});
