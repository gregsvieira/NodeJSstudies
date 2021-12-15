const { EventEmitter} = require('events')

const ev = new EventEmitter()


// console.log(ev) Utilizando eventos

/*Ouvir eventos com 'On' e como segundo argumento precisamos executar uma ação:
ev.on('saySomething', (message) =>{
    console.log('Eu ouvi você', message)
})*/

//Ouvir evento um unica vez e ignorar o resto com  'Once':
ev.once('saySomething', (message) =>{
    console.log('Eu ouvi você', message)
})

ev.emit('saySomething', "Greg") //emit= emitir - Emitindo eventos
ev.emit('saySomething', "João")
ev.emit('saySomething', "Heitor")
// Sem colocar nada para ouvir não acontece nada ao executar o código.



