(function() {
  'use strict';

  var myApp = new Framework7();

  var $$ = Dom7;

  // Add view
  var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
  });

  // `Home` view
  myApp.onPageInit('index', function (page) {
    console.log('home page', page);
  });

  myApp.onPageInit('repairs', function (page) {
    console.log('repairs', page);
  });

})();
