// Herdando do EventEmitter

const { inherits } = require('util')//puxar do core do nodejs a função já existente inherits
const { EventEmitter } = require('events') //ela vai herdar a funcionalidade do eventemitter

 //para essa função de character:
function Character(name){
    this.name = name
} 
// quando executada ela com new character, será levado as opções do eventemitter para dentro da função.
// ou seja o 'on' e o 'emit' vai fazer parte e funcionar na função


inherits(Character, EventEmitter)//character herdou todas as opções do eventemitter

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))
// função que quando chapolin escutar um 'help' ele envia para console.log sua fala.

console.log('Oh! E agora, quem poderá me defender?')
// e é imprimido no console.log anterior

chapolin.emit('help')
// e o próprio chapolin vai emitir a ajuda

//Isso será utilizado em outros módulos de node