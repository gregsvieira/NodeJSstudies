// setTimeout vai rodar uma função N vezes
    //depois e X milissegundos
const timeOut = 1000 // registra em memória
const checking = () => console.log('checking!') // registra em memória

setInterval(checking, timeOut) //guarda o finished p/ callback e timeout é executado
