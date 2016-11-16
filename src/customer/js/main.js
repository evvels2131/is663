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

  // `Repairs` view
  myApp.onPageInit('repairs-main', function (page) {
    console.log('repairs-main');
    addActive(1);
  });

  // `Notifications` view
  myApp.onPageInit('notifications-main', function (page) {
    console.log('notifications-main');
    addActive(2);
  });

  // `Settings` view
  myApp.onPageInit('settings-main', function (page) {
    console.log('settings-main');
    addActive(3);
  });

  // `Schedule Service` view
  myApp.onPageInit('schedule-service', function (page) {
    $$('#btn-schedule-service').on('click', function () {
      myApp.alert('You have successfully requested a service repair.', 'Success!');
    });
  });

  // `Contact Us` view
  myApp.onPageInit('contact-us', function (page) {
    $$('#btn-contact-us').on('click', function () {
      myApp.alert('You have successfully sent a message', 'Success!');
    });
  });

  // `Make Payment` view
  myApp.onPageInit('make-payment', function (page) {
    $$('#btn-make-payment').on('click', function () {
      myApp.alert('You have successfully submitted a payment.', 'Success!');
    });
  });

  // `Contact Service Provider` view
  myApp.onPageInit('contact-service-provider', function (page) {
    $$('#btn-contact-service-provider').on('click', function () {
      myApp.alert('You have successfully contacted the service provider.', 'Success!');
    });
  });

  // `Rate` view
  myApp.onPageInit('rate', function (page) {
    $$('#btn-rate').on('click', function () {
      myApp.alert('You have successfully submitted your rating.', 'Success!');
    });
  });

  // `General` view
  myApp.onPageInit('general', function (page) {
    $$('#btn-general').on('click', function () {
      myApp.alert('You have successfully submitted your changes.', 'Success!');
    });
  });

  // `Help Center` view
  myApp.onPageInit('help-center', function (page) {
    $$('#btn-help-center').on('click', function () {
      myApp.alert('You have successfully contacted the customer service', 'Success!');
    });
  });

  // `Report Problem` view
  myApp.onPageInit('report-problem', function (page) {
    $$('#btn-report-problem').on('click', function () {
      myApp.alert('You have successfully reported a problem.', 'Success!');
    });
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
