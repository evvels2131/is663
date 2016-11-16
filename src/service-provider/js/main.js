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

  // `Contact Customer` view
  myApp.onPageInit('contact-customer', function (page) {
    console.log('contact customer');
    var btnContactCustomer = $$('#btn-contact-customer');
    btnContactCustomer.on('click', function () {
      myApp.alert('You have successfully send a message', 'Success!');
    });
  });

  // `Update Status Service` view
  myApp.onPageInit('update-status-repair', function (page) {
    console.log('update-status-repair');
    var btnUpdateStatusRepair = $$('#btn-update-repair-status');
    btnUpdateStatusRepair.on('click', function () {
      myApp.alert('You have successfully updated the repair status', 'Success!');
    });
  });

  // `General` view
  myApp.onPageInit('general', function (page) {
    console.log('general');
    var btnGeneralInformation = $$('#btn-general-information');
    btnGeneralInformation.on('click', function () {
      myApp.alert('You have successfully updated your information', 'Success!');
    });
  });

  // `Help Center` view
  myApp.onPageInit('help-center', function (page) {
    console.log('help-center');
    var btnHelpCenter = $$('#btn-help-center');
    btnHelpCenter.on('click', function () {
      myApp.alert('You have successfully contacted customer support.', 'Success!');
    });
  });

  // `Help Center` view
  myApp.onPageInit('report-problem', function (page) {
    console.log('report-problem');
    var btnReportProblem = $$('#btn-report-problem');
    btnReportProblem.on('click', function () {
      myApp.alert('You have successfully reported your problem.', 'Success!');
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
