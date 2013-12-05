var test = require('tape');

module.exports = function(creator) {
  var messengers = [creator(), creator()];

  test('0 --> 1', function(t) {
    t.plan(1);

    messengers[1].once('data', function(data) {
      t.equal(data, 'hello');
    });

    messengers[0].write('hello');
  });

  test('1 --> 0', function(t) {
    t.plan(1);

    messengers[0].once('data', function(data) {
      t.equal(data, 'hello');
    });

    messengers[1].write('hello');
  });

  test('close 1', function(t) {
    t.plan(1);
    messengers[1].close();
    t.pass('closed');
  });

  test('0 --> 1 fails', function(t) {
    t.plan(1);

    messengers[1].once('data', function(data) {
      t.fail('should not have received data');
    });

    setTimeout(function() {
      t.pass('message was not received');
    }, 100);

    messengers[0].write('hello');
  });
};