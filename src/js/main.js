(function() {
  'use strict';

  $('#customer').click(function () {
    hide(1);
  });

  $('#service-provider').click(function () {
    hide(0);
  });

  function hide(id) {
    var iframes = $('.iframes').children();
    var hide = iframes[id];

    $(iframes).each(function (idx, value) {
      if ($(value).hasClass('hide')) {
        $(value).removeClass('hide');
      }
    });

    $(hide).addClass('hide');
  }

})();
