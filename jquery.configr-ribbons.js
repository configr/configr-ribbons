/*!
 * jQuery Configr Ribbons Plugin v0.1
 * https://github.com/configr/configr-ribbons
 *
 * Copyright 2013 Arthur Furlan <afurlan@confi.gr>
 * Copyright 2013 Amilton Paglia <amilton@matilhaestud.io>
 */
(function($) {
  "use strict";

  $.fn.configr = function(options) {
    return this.each(function() {

      // merge custom and default options
      options = $.extend({
        color: 'purple',
        referral: ''
      }, options);

      // build ribbon image url
      var media_url = 'http://media.confi.gr/ribbon/';
      var ribbon = media_url + options['color'] + '.png';

      // include html content
      $(this).html(
          '<div style="position:absolute;top:0;right:0;'
        + 'width:119px;height:119px;text-indent:-9999px;cursor:hand;'
        + 'cursor:pointer;outline:0;border:none;"><a href="http://confi.gr/?r='
        + options['referral'] + '" title="Managed via Configr">'
        + '<img src="' + ribbon + '" style="position:absolute;top:-1px;'
        + 'right:0px;width:119px;height:119px;text-indent:-9999px;'
        + 'z-index:2;outline:0;border:none;"/></a></div>'
      );
    });
  };
})(jQuery);
