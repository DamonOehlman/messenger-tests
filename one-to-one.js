var test = require('tape');

module.exports = function(creator) {
  var messengers = [creator(), creator()];
};