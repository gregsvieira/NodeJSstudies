const getFlagValue =  require('./flags.js')
console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)

//digitar no node:
// node greetings --name "greg" --greeting "tudo bem?"