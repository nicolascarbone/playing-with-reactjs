
var $ = require('jquery');

module.exports = function() {

	var a =	$.ajax({
    url: 'keys.json',
    datatype: 'json',
    async: false,
    success: function( response ) {
      return response
    },
    error: function() {
    	return {}
    }
  });

  return a.responseJSON;

}