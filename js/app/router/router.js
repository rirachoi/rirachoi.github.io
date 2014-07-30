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
        images: [
        "assets/image/mta/result.png",
        "assets/image/mta/result_with_map.png",
        "assets/image/mta/map.gif"
        ]
      }),

      new app.Post({
        id: 2, title: 'Butterflies in AUS',
        application: "Sinatra (week3 day2)",
        main_image: "assets/image/butterflies/main.png",
        images: [
          "assets/image/butterflies/display.png",
          "assets/image/butterflies/butterfly.png",
          "assets/image/butterflies/display_state.png"
        ]
      }),

      new app.Post({
        id: 3, title: 'ALLS Watch',
        application: "Sinatra (week3 day3)",
        main_image: "assets/image/alls_watch/main.png",
        images: [
          "assets/image/alls_watch/main_with_hover.png",
          "assets/image/alls_watch/list.png",
          "assets/image/alls_watch/category.png",
          "assets/image/alls_watch/category_list.png"
        ]
      }),

      new app.Post({
        id: 4, title: 'MS Finder',
        application: "Rails (week4 day1)",
        main_image: "assets/image/ms_finder/main.png",
        images: [
          "assets/image/ms_finder/movie_search.png",
          "assets/image/ms_finder/quick_result.png",
          "assets/image/ms_finder/quick_result_with_plot.png",
          "assets/image/ms_finder/movie_list.png",
          "assets/image/ms_finder/movie_list_result.png",
          "assets/image/ms_finder/stock_search.png",
          "assets/image/ms_finder/stock_result.png"
        ]
      }),

      new app.Post({
        id: 5, title: 'Book Keeper',
        application: "Rails with Database (week4 day3)",
        main_image: "assets/image/book_keeper/main.png",
        images: [
          "assets/image/book_keeper/main.png",
          "assets/image/book_keeper/books.png",
          "assets/image/book_keeper/book_info.png",
          "assets/image/book_keeper/book_info2.png",
          "assets/image/book_keeper/authors.png",
          "assets/image/book_keeper/author_info.png",
          "assets/image/book_keeper/author_info_with_hover.png"
        ]
      }),

      new app.Post({
        id: 6, title: 'SOLUHO Calendar',
        application: "First Project (week5)",
        main_image: "assets/image/soluho_calendar/main.png",
        images: [
          "assets/image/soluho_calendar/user_calendar.png",
          "assets/image/soluho_calendar/user_event_list.png",
          "assets/image/soluho_calendar/user_details.png",
          "assets/image/soluho_calendar/event_category.png",
          "assets/image/soluho_calendar/int_public_holiday.png",
          "assets/image/soluho_calendar/int_public_holiday_list.png"
        ]

      }),

      new app.Post({
        id: 7, title: 'Fireball-Game Part',
        application: "Second Group Project (week8)",
        main_image: "assets/image/fireball/game_main.png",
        images: [
          "assets/image/fireball/game_lang.png",
          "assets/image/fireball/game_play.png",
          "assets/image/fireball/game_play2.png",
          "assets/image/fireball/game_finish1.png",
          "assets/image/fireball/game_finish2.png",
          "assets/image/fireball/game_finish4.png",
          "assets/image/fireball/chat.png",
          "assets/image/fireball/chat_lang.png",
          "assets/image/fireball/edit.png",
          "assets/image/fireball/index.png"
        ]

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
