const servicebus = require('servicebus');
const retry = require('servicebus-retry');
const bus = servicebus.bus({
    // user: 'rabbitUser',
    // password: 'test1234',
    host: 'localhost',
    port: '5672'
});
bus.use(bus.package());
bus.use(bus.correlate());

bus.use(retry({
    store: new retry.MemoryStore()
}));

module.exports = bus;
