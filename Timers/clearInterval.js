// clearTimeout vai cancelar uma função timeout
    // a função finished sofre callback, pois ela é registrada e depois do timeout ela é chamada de volta.
const timeOut = 1000 // registra em memória
const checking = () => console.log('checking!') // registra em memória


let interval = setInterval(checking, timeOut) //timer recebe o setTimeout e guarda no timer.

setTimeout( () => clearInterval(interval), 5000) //cancelando a função após 5 segundos.