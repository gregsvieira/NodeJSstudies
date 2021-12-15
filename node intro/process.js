// Módulo global de nodejs

//Traz muitas informações
//console.log(process)

// Um array interessante é o ARGV
// Traz uma lista de argumentos que estou rodando no nodejs
// Trouxe o node que está sendo rodado e o nome do arquivo
//console.log(process.argv)

//Concatenando no nodejs(no terminal)
//console.log('Seu nome é ', process.argv[2] + ' ' + process.argv[3])

// De template literals:
//const firstName = process.argv[2]
//const lastName = process.argv[3]
//console.log(`Seu nome é  ${firstName} ${lastName}`)

// Passando flags - no terminal --name"" --greeting""
console.log(process.argv)