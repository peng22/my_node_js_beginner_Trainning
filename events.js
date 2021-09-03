const events=require('events')

const emitter= new events.EventEmitter()

emitter.emit('customEvent','helloworld','computer')
emitter.on('customEvent',()=>{

})
