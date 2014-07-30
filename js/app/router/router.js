var app = app || {};

//////app's Routers
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
          "mta/main.png",
          "mta/result.png",
          "mta/result_with_map.png",
          "mta/map.gif"
        ]
      }),

      new app.Post({
        id: 2, title: 'Butterflies in AUS',
        application: "Sinatra (week3 day2)",
        main_image: "assets/image/butterflies/main.png",
        images: [
          "butterflies/main.png",
          "butterflies/display.png",
          "butterflies/butterfly.png",
          "butterflies/display_state.png"
        ]
      }),

      new app.Post({
        id: 3, title: 'ALLS Watch',
        application: "Sinatra (week3 day3)",
        main_image: "assets/image/alls_watch/main.png",
        images: [
          "alls_watch/main_with_hover.png",
          "alls_watch/list.png",
          "alls_watch/category.png",
          "alls_watch/category_list.png"
        ]
      }),

      new app.Post({
        id: 4, title: 'MS Finder',
        application: "Rails (week4 day1)",
        main_image: "assets/image/ms_finder/main.png",
        images: [
          "ms_finder/movie_search.png",
          "ms_finder/quick_result.png",
          "ms_finder/quick_result_with_plot.png",
          "ms_finder/movie_list.png",
          "ms_finder/movie_list_result.png",
          "ms_finder/stock_search.png",
          "ms_finder/stock_result.png"
        ]
      }),

      new app.Post({
        id: 5, title: 'Book Keeper',
        application: "Rails with Database (week4 day3)",
        main_image: "assets/image/book_keeper/main.png",
        images: [
          "book_keeper/books.png",
          "book_keeper/book_info.png",
          "book_keeper/book_info2.png",
          "book_keeper/authors.png",
          "book_keeper/author_info.png",
          "book_keeper/author_info_with_hover.png"
        ]
      }),

      new app.Post({
        id: 6, title: 'SOLUHO Calendar',
        application: "First Project (week5)",
        main_image: "assets/image/soluho_calendar/main.png",
        images: [
          "soluho_calendar/user_calendar.png",
          "soluho_calendar/user_event_list.png",
          "soluho_calendar/user_details.png",
          "soluho_calendar/event_category.png",
          "soluho_calendar/int_public_holiday.png",
          "soluho_calendar/int_public_holiday_list.png"
        ]

      }),

      new app.Post({
        id: 7, title: 'Fireball-Game Part',
        application: "Second Group Project (week8)",
        main_image: "assets/image/fireball/game_main.png",
        images: [
          "fireball/game_lang.png",
          "fireball/game_play.png",
          "fireball/game_play2.png",
          "fireball/game_finish1.png",
          "fireball/game_finish2.png",
          "fireball/game_finish4.png",
          "fireball/chat.png",
          "fireball/chat_lang.png",
          "fireball/edit.png",
          "fireball/index.png"
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