
(function(){
  var app = angular.module("appPages", []);

  app.directive('pageNav',function(){
    return{
        restrict: 'E',
        templateUrl: "templates/page-nav.html",
        controller: function($scope, $location, anchorSmoothScroll) {
          $scope.gotoElement = function (eID){
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash(eID);
            // call $anchorScroll()
            anchorSmoothScroll.scrollTo(eID);

          };
        },
        controllerAs: "scroll"
    };

  });

  app.directive("pageHeader", function(){
    return{
      restrict: "E",
      templateUrl:"templates/page-header.html",
      controller: function(){
        this.tab = 0;

        this.setTab = function(selectedTab){
          this.tab = selectedTab;
        };

        this.isSelected = function(checkedTab){
          return this.tab === checkedTab;
        };
      },
      controllerAs: "tab"
    };
  });

  app.controller('SkillsController', function(){
    this.mySkills = webLanguages;
  });

  app.controller('ProjectsController', function(){
    this.myProjects = projects;
  });

  app.directive("pageBody", function(){
    return{
      restrict: "E",
      templateUrl: "templates/page-body.html"
    };
  });

  app.directive("pageFooter", function(){
    return{
      restrict: "E",
      templateUrl: "templates/page-footer.html"
    };
  });

  ///// smooth scroll
  app.service('anchorSmoothScroll', function(){

      this.scrollTo = function(eID) {

          // This scrolling function
          // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

          var startY = currentYPosition();
          var stopY = elmYPosition(eID);
          var distance = stopY > startY ? stopY - startY : startY - stopY;
          if (distance < 100) {
              scrollTo(0, stopY); return;
          }
          var speed = Math.round(distance / 100);
          if (speed >= 20) speed = 20;
          var step = Math.round(distance / 25);
          var leapY = stopY > startY ? startY + step : startY - step;
          var timer = 0;
          if (stopY > startY) {
              for ( var i=startY; i<stopY; i+=step ) {
                  setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                  leapY += step; if (leapY > stopY) leapY = stopY; timer++;
              } return;
          }
          for ( var i=startY; i>stopY; i-=step ) {
              setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
              leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
          }

          function currentYPosition() {
              // Firefox, Chrome, Opera, Safari
              if (self.pageYOffset) return self.pageYOffset;
              // Internet Explorer 6 - standards mode
              if (document.documentElement && document.documentElement.scrollTop)
                  return document.documentElement.scrollTop;
              // Internet Explorer 6, 7 and 8
              if (document.body.scrollTop) return document.body.scrollTop;
              return 0;
          }

          function elmYPosition(eID) {
              var elm = document.getElementById(eID);
              var y = elm.offsetTop;
              var node = elm;
              while (node.offsetParent && node.offsetParent != document.body) {
                  node = node.offsetParent;
                  y += node.offsetTop;
              } return y;
          }

      };

  });

  var webLanguages = [
      { name: "Ruby On Rails",
        image: "http://i.imgur.com/wiPDgaH.jpg"
      },{ name: "Java Script",
        image: "http://i.imgur.com/Vu67Qdc.jpg"
      },{ name: "jQuery",
        image: "http://i.imgur.com/hrTu4vP.jpg"
      },{ name: "HTML",
        image: "http://i.imgur.com/sQ51vpb.jpg"
      },{ name: "CSS",
        image: "http://i.imgur.com/LpZTHtn.jpg"
      },{ name: "Angular js",
        image: "http://i.imgur.com/qhBTqhy.jpg"
      },{ name: "SASS",
        image: "http://i.imgur.com/RCogdnQ.jpg"
      },{ name: "GITHUB",
        image: "http://i.imgur.com/N1bT1iF.jpg"
      }
    ];

  var projects = [
      { name:"Fireball",
        url:"http://fireballtalks.herokuapp.com",
        github:"https://github.com/lyntco/fireball",
        image: "http://i.imgur.com/Iu68n7g.png",
        description: "An international chat translator and game application with 65+ own-brand stickers. USING: Ruby on Rails, Google translate API, JavaScript and jQuery, Haml."
      },{ name:"World Map News",
        url:"http://worldmapnews.herokuapp.com",
        github:"https://github.com/rirachoi/world_map_news",
        image: "http://i.imgur.com/qSXtyDG.png",
        description: "An international news application using geographical location with the world map. USING: Ruby on Rails, jQuery, feedzilla API, TDD with Simplecov and RSpec."
      },{ name:"NSWFR Nortification",
        url:"#",
        github:"https://github.com/rirachoi/nswfire_zabbix",
        image: "http://i.imgur.com/suv8bt1.png",
        description: "Zabbix Email, SMS and Web Linked Alerting framework. Consists of multiple forms that are browser independent and cross platform. Built in HTML, CSS and jQuery. Utilized by NSW Fire and Rescue for Infrastructure Alerting, Outages and Notifications."
      },{ name:"SoLoHo Calendar",
        url:"http://publicholiday-calendar.herokuapp.com",
        github:"https://github.com/rirachoi/SOLUHO_calendar",
        image: "http://i.imgur.com/TvyCa4A.png",
        description: "A Solar, Lunar and International Public Holiday calendar application. USING: Ruby on Rails, enrico gem, API and Lunar date CSV file."
      },{ name:"WDI Blog",
        url:"https://github.com/rirachoi/rirachoi_blog",
        github:"https://github.com/rirachoi/rirachoi_blog",
        image: "http://i.imgur.com/GqK4wGE.png",
        description: "This is my personal web site that is built by Ruby on Rails and jQuery."
      }

    ];


})();

