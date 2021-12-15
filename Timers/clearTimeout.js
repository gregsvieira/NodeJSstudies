// clearTimeout vai cancelar uma função timeout
    // a função finished sofre callback, pois ela é registrada e depois do timeout ela é chamada de volta.
const timeOut = 3000 // registra em memória
const finished = () => console.log('done!') // registra em memória

let timer = setTimeout(finished, timeOut) //timer recebe o setTimeout e guarda no timer.
clearTimeout(timer) //cancelando aquilo que guardou