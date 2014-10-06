
(function(){
  var app = angular.module("appPages", ['ngMobile']);

// PAGE HEADER //
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

            // changing Page header color
            var pageNavElem = document.getElementById('page-nav');
            // var selectedNav = document.getElementById(eID+'-nav');
            if(eID === "about"){
              pageNavElem.style.borderBottom='15px solid #C0EFD4';
              pageNavElem.style.backgroundColor = 'rgba(250, 255, 252, 1)';
            }else if(eID === "projects"){
              pageNavElem.style.borderBottom='15px solid #C0E8EF';
              pageNavElem.style.backgroundColor="rgba(250, 253, 254, 1)";
            }else if(eID === "contact"){
              pageNavElem.style.borderBottom='15px solid #FCC';
              pageNavElem.style.backgroundColor ="rgba(254, 246, 248, 1)";
            }else{
              pageNavElem.style.borderBottom='15px solid #FCECED';
              pageNavElem.style.backgroundColor ="rgba(254, 255, 253, 1)";
            }
          };
        },
        controllerAs: "scroll"
    };

  });

  app.directive("pageHeader", function(){
    return{
      scope: true,
      restrict: "E",
      templateUrl:"templates/page-header.html",
      controller: function($scope){
        $scope.tab = 0;

        $scope.setTab = function(selectedTab){
          $scope.tab = selectedTab;
        };

        $scope.isSelected = function(checkedTab){
          return $scope.tab === checkedTab;
        };
      },
      controllerAs: "tab"
    };
  });


//// PAGE BODY ////

// ABOUT //
  app.controller('SkillsController', ['$scope', function($scope){
    $scope.mySkills = webLanguages;
  }]);

  app.controller('CommentsController', ['$scope',function($scope){
    $scope.myComment = 10000;

    $scope.setComment = function(selectedComment){
      $scope.myComment = selectedComment;
    };

    $scope.isSelectedComment = function(checkedComment){
      return $scope.myComment === checkedComment
    };

  }]);


// PROJECT //

  app.controller('ProjectsController', ['$scope', function($scope){
    $scope.myProjects = projects;

  }]);

  app.directive("pageBody", function(){
    return{
      scope: true,
      restrict: "E",
      templateUrl: "templates/page-body.html"
    };
  });

  app.directive("pageFooter", function(){
    return{
      scope: true,
      restrict: "E",
      templateUrl: "templates/page-footer.html"
    };
  });


// SMOOTH SCROLL //
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

// DATA //

  var webLanguages = [
      { name: "Ruby On Rails",
        image: "http://i.imgur.com/wiPDgaH.jpg",
        comment: "I LOVE IT! I am undergoing intensive training to be a Ruby Ninja!"
      },{ name: "Java Script",
        image: "http://i.imgur.com/Vu67Qdc.jpg",
        comment: "I am passionate about it!"
      },{ name: "jQuery",
        image: "http://i.imgur.com/hrTu4vP.jpg",
        comment: "I feel quite comfortable with it now! I enjoy making websites more dynamic with this."
      },{ name: "HTML",
        image: "http://i.imgur.com/sQ51vpb.jpg",
        comment: "The fundamentals! I endlessly try to improve my code with better, readable and well-structured designs."
      },{ name: "CSS",
        image: "http://i.imgur.com/LpZTHtn.jpg",
        comment: "I am consistantly practicing and learning new meathods to enable responsive and cross browser web design!"
      },{ name: "Angular js",
        image: "http://i.imgur.com/qhBTqhy.jpg",
        comment: "I just started to learn it and I really like it. I built this web site using it but want to practice more!"
      },{ name: "SASS",
        image: "http://i.imgur.com/RCogdnQ.jpg",
        comment: "I just need to practice more with Haml"
      },{ name: "GITHUB",
        image: "http://i.imgur.com/N1bT1iF.jpg",
        comment: "My favorite! I use it all the time for my code managment and to check awesome open sources!"
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
        image: "http://i.imgur.com/O22dKF6.png",
        description: "An international news application using geographical location with the world map. USING: Ruby on Rails, jQuery, feedzilla API, TDD with Simplecov and RSpec."
      },{ name:"NSWFR Notification",
        url:"https://github.com/rirachoi/nswfire_zabbix",
        github:"https://github.com/rirachoi/nswfire_zabbix",
        image: "http://i.imgur.com/suv8bt1.png",
        description: "Zabbix Email, SMS and Web Linked Alerting framework. Consists of multiple forms that are browser independent and cross platform. Built in HTML, CSS and jQuery. Utilized by NSW Fire and Rescue for Infrastructure Alerting, Outages and Notifications."
      },{ name:"SoLoHo Calendar",
        url:"http://publicholiday-calendar.herokuapp.com",
        github:"https://github.com/rirachoi/SOLUHO_calendar",
        image: "http://i.imgur.com/TvyCa4A.png",
        description: "A Solar, Lunar and International Public Holiday calendar application. USING: Ruby on Rails, enrico gem, API and Lunar date CSV file."
      },{ name:"WDI Blog",
        url:"https://rirachoi-blog.herokuapp.com",
        github:"https://github.com/rirachoi/rirachoi_blog",
        image: "http://i.imgur.com/GqK4wGE.png",
        description: "This is my personal web site that is built by Ruby on Rails and jQuery."
      }

    ];

})();

