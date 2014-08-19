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

    function gotData(data) {
      t.fail('should not have received data');
    }

    messengers[1].once('data', gotData);

    setTimeout(function() {
      messengers[1].removeListener('data', gotData);
      t.pass('message was not received');
    }, 500);

    messengers[0].write('hello');
  });
};
