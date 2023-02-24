let Emitter = require('events');
let config = require("./config")
let emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');

});

emtr.emit("greet");