const events = require("events");

const eventEmiter = new events.EventEmitter();

// creating an event handler
const chitkarDibo = () => {
    console.log("Oi beta koi tui?? Ami darai asi!!");
}

// assign the handler into an event
eventEmiter.on('scream', chitkarDibo);

// firing the event
eventEmiter.emit('scream');