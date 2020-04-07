var bus = require('./custumBus');
var count = 0;
bus.listen('event.hello', { ack: true }, function (event) {
    if (++count % 10 == 0) {
        event.handle.reject();  
        console.warn('Rejection ', event.cid);
    } else {
        console.log(event);
        event.handle.ack();  
    }
});
