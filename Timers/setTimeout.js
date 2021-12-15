// setTimeout vai rodar uma função depois de X milissegundos
    // a função finished sofre callback, pois ela é registrada e depois do timeout ela é chamada de volta.
const timeOut = 3000 // registra em memória
const finished = () => console.log('done!') // registra em memória

setTimeout(finished, timeOut) //guarda o finished p/ callback e timeout é executado

console.log('Rodo antes do finished')//vai rodar imediatamente depois que finished foi guardada.