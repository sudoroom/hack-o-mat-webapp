#!/usr/bin/env node

var b = require('bonescript');

b.pinMode('USR3', b.OUTPUT);

var state = b.LOW;

function blink() {
    if(state == b.LOW) {
        b.digitalWrite('USR3', b.HIGH);
        state = b.HIGH;
    } else {
        b.digitalWrite('USR3', b.LOW);
        state = b.LOW;
    }
    setTimeout(blink, 500);
}

blink();


/*
b.pinMode('P9_12', b.INPUT, 7, 'slow');
b.pinMode('P9_14', b.INPUT, 7, 'slow');
b.pinMode('P9_16', b.INPUT, 7, 'slow');
b.pinMode('P9_18', b.INPUT, 7, 'slow');
b.pinMode('P9_20', b.INPUT, 7, 'slow');
b.pinMode('P9_22', b.INPUT, 7, 'slow');
b.pinMode('P9_24', b.INPUT, 7, 'slow');

b.digitalWrite('P9_12', b.HIGH)
*/
