/*!
 * jQuery Configr Ribbons Plugin v0.1
 * https://github.com/configr/configr-ribbons
 *
 * Copyright 2013 Arthur Furlan <afurlan@confi.gr>
 * Copyright 2013 Amilton Paglia <amilton@matilhaestud.io>
 */
(function($) {
  "use strict";

  var _parse_querystring = function(querystring) {
    var params = {}, pieces, temp, i, l;
    pieces = querystring.split('&');
    for (i=0,l=pieces.length;i<l;i++) {
      temp = pieces[i].split('=');
      params[temp[0]] = temp[1];
    }
    return params;
  }

  var _configr_param = function(param, value) {
    $('script').each(function() {
      var http_pieces = this.src.split('?');
      var path_pieces = http_pieces[0].split('/');
      var path_script = path_pieces[path_pieces.length-1];
      if (path_script.match(/^configr-ribbon(\.min)?\.js$/) && http_pieces.length > 1) {
        var querystring = _parse_querystring(http_pieces[1]);
        value = querystring[param] || value;
      }
    });
    return value;
  }

  // default settings
  var template = _configr_param('t', 'purple');
  var referral = _configr_param('r', '');

  // build assets url
  var ribbon = 'http://media.confi.gr/ribbon/' + template + '.png';
  var target = 'http://confi.gr/?r=' + referral

  // include html content
  $('body').prepend(
      '<div id="configr-ribbon" style="position:absolute;top:0;right:0;'
    + 'background:transparent;width:119px;height:119px;text-indent:-9999px;'
    + 'cursor:hand;cursor:pointer;outline:0;border:none;"><a href="' + target
    + '" title="Managed via Configr"><img src="' + ribbon + '" '
    + 'style="position:absolute;top:-1px;right:0px;width:119px;height:119px;'
    + 'text-indent:-9999px;z-index:2;outline:0;border:none;"/></a></div>'
  );
})(jQuery);
