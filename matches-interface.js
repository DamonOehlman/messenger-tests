var test = require('tape');

module.exports = function(creator) {
  var messenger;

  test('can create a new messenger', function(t) {
    t.plan(1);
    t.ok(messenger = creator(), 'new instance created');
  });

  test('has a write function', function(t) {
    t.plan(1);
    t.equal(typeof messenger.write, 'function', 'available');
  });

  test('has a close function', function(t) {
    t.plan(1);
    t.equal(typeof messenger.close, 'function', 'available');
  });

  test('has an eventemitter style addListener method', function(t) {
    t.plan(1);
    t.equal(typeof messenger.addListener, 'function', 'available');
  });

  test('has an eventemitter style on method', function(t) {
    t.plan(1);
    t.equal(typeof messenger.on, 'function', 'available');
  });

  test('has an eventemitter style once method', function(t) {
    t.plan(1);
    t.equal(typeof messenger.once, 'function', 'available');
  });

  test('has an eventemitter style removeListener method', function(t) {
    t.plan(1);
    t.equal(typeof messenger.removeListener, 'function', 'available');
  });

  test('can call write without error', function(t) {
    t.plan(1);
    messenger.write('hello');
    t.pass('passed');
  });

  test('can bind an event listener without error', function(t) {
    t.plan(1);
    messenger.on('data', function() {});
    t.pass('passed');
  });

  test('can close the messenger', function(t) {
    t.plan(1);
    messenger.close();
    t.pass('closed');
  });
};