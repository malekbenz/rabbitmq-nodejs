var servicebus = require('servicebus');

const bus = servicebus.bus({
    // user: 'rabbitUser',
    // password: 'test1234',
    host: 'localhost',
    port: '5672'
});
bus.use(bus.package());
bus.use(bus.correlate());
var counter = 0;
setInterval(function () {
    bus.send('event.hello',
        {
            id: ++counter
        },
        {
            ack: true,
            persistent: true
        });
}, 1000);