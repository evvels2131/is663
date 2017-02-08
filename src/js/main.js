(function() {
  'use strict';

  $('#customer').click(function () {
    show(0);
  });

  $('#service-provider').click(function () {
    show(1);
  });

  $('#registration-show').click(function () {
    show(2);
  });

  function show(id) {
    var iframes = $('.iframes').children();
    var show = iframes[id];

    $(iframes).each(function (idx, value) {
      if (!$(value).hasClass('hide')) {
        $(value).addClass('hide');
      }
    });

    $(show).removeClass('hide');
  }

})();
