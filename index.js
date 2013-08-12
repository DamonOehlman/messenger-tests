module.exports = function(creator) {
  require('./matches-interface')(creator);
  require('./one-to-one')(creator);
};