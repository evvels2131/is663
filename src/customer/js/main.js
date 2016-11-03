(function() {
  'use strict';

  // Initialize app
  var myApp = new Framework7({
    onAjaxStart: function (xhr) {
      myApp.showIndicator();
    },
    onAjaxComplete: function(xhr) {
      myApp.hideIndicator();
    }
  });

  // If we need to use custom DOM library, let's save it to $$ variable:
  var $$ = Dom7;

  // Add view
  var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
  });

  // The code below will only be run for the `About` page
  myApp.onPageInit('about', function (page) {

  });

})();
