/*!
 * jQuery Configr Ribbons Plugin v0.1
 * https://github.com/configr/configr-ribbons
 *
 * Copyright 2013 Arthur Furlan <afurlan@confi.gr>
 * Copyright 2013 Amilton Paglia <amilton@matilhaestud.io>
 */
(function($) {
  "use strict";

  // default settings
  var template = 'purple';
  var referral = '';

  // build assets url
  var ribbon = 'http://media.confi.gr/ribbon/' + template + '.png';
  var target = 'http://confi.gr/?r=' + referral

  // include html content
  $('body').prepend(
      '<div id="configr-ribbon" style="position:absolute;top:0;'
    + 'right:0;width:119px;height:119px;text-indent:-9999px;'
    + 'cursor:hand;cursor:pointer;outline:0;border:none;"><a '
    + 'href="' + target + '" title="Managed via Configr"><img '
    + 'src="' + ribbon + '" style="position:absolute;top:-1px;'
    + 'right:0px;width:119px;height:119px;text-indent:-9999px;'
    + 'z-index:2;outline:0;border:none;"/></a></div>'
  );
})(jQuery);
