const EventEmitter = require('events');
const customEventEmitter = new EventEmitter();

customEventEmitter.on('response', (name,id) =>{
console.log(`Response Recived user name:${name} with id:${id}`)
})
customEventEmitter.on('response', () =>{
    console.log('New Response Recived ')
})
customEventEmitter.emit('response', 'Thirumalesh', 30);