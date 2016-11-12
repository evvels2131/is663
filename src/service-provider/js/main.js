(function() {
  'use strict';

  var myApp = new Framework7();

  var $$ = Dom7;

  // Add view
  var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
  });

  // `Home` view
  myApp.onPageInit('index-main', function (page) {
    console.log('index-main');
    addActive(0);
  });

  // `Notifications` view
  myApp.onPageInit('notifications-main', function (page) {
    console.log('notifications-main');
    addActive(1);
  });

  // `Settings` view
  myApp.onPageInit('settings-main', function (page) {
    console.log('settings-main');
    addActive(2);
  });

  function addActive(id) {
    var links = $$('.toolbar-inner').children();
    var activeLink = links[id];

    $$(links).each(function (idx, value) {
      if ($$(value).hasClass('active')) {
        $$(value).removeClass('active');
      }
    });

    $$(activeLink).addClass('active');
  }

})();
