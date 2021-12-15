# Para que serve?
 * Backend
 * Front End
 * Micro serviços
 * API (servir de dados para varias plaformas ao mesmo tempo)
        ** Webapp
        ** Mobile 
        ** Desktop
 * Script e Automação
 * Machine Learning

 # Vantagens:
* Rápido para execução e prototipar
* Alta escalabilidade
* Aplicações de ponta
* Js everywhere (ou seja, utilizando js em tudo)
* Ecosistema gigante
* Casos de uso (Netflix, Paypal...)

# O QUE É NODE JS?

* Js Runtime Environment (Ambiente de Execução)
    Mini sistema-operacional
    Sistema independente para rodar js
    Ele conversa com o Sistema Operacional, que conversa então com o Hardware

* !=Framework
    Ele NÃO é um framework 
* !=Linguagem
    Ele NÃO é uma linguagem de programação 

* NODE.JS é modular

# V8 - Javascript Engine
- Motor do Google de JavaScript
    * Interpretador de JS para linguagem da máquina
    * Criado em C++
    * Baseado nas últimas features do JS
    * Focado para Chrome mas tem todo o cuidado de não quebrar o Node 
    * Não possui a DOM, console ou File System

## Node é single-threaded, non-blocking e asynchronous.
* Usa o o Event Loop     

## REPL
* Read-Eval-Print-Loop
  Ler-Interpretar-Escrever-Repetir
* Escrever Javascript no ambiente node, direto no terminal
* Para entrar basta digitar `node` no terminal
* Diversos modulos dentro do NODE, além do global:
  |  os | path | fs | http | stream | ...
  Ex: fs = fiel system. http = cria servidores para gente

  ## Process
  * Com flags --name  "" --greeting ""

  # NODE PACKAGE MANAGER
    _Glossary: Dependencias, Packages, Modules_

    - [] Verificar se temos o npm instalado e qual versão: `npm-v`

    - [] Criar nosso próprio pacote: `npm init` ou `npm init -y`

    - [] O que é o arquivo package.json
            JavaScript Object Notation

    - [] Utilizar módulos de terceiros
            `npm install "nome do módulo"` ou `npm i "nome do módulo"` ou
                `npm i "nome do módulo" -D` Dependencia de desenvolvimento
                devDependencies = quando alguém for utilizar o app não irá baixar
                `npm update` - atualizar e remapear tudo no package-lock.json

    - [] O que é o diretório node_modules
        -Se observarmos o node_modules e olharmos o package.json do `cfonts`, ele chamou   outros modulos que chamaram outros.
        -Não enviamos a node_modules no git, por isso criamos um `gitignore` com `node_modules/` para ignorar.
        - Ao continuar o projeto que já tá com as dependencias anotadas, precisa somente `npm install` no terminal para baixar as dependencias necessárias.

    - [] O que é o arquivo package-lock.json
        Traz informações pois faz o mapeamente de todas as dependencias existentes no projeto e não deve ser mexido, e na maioria das vezes ele não é deletado.
        Mas caso seja deletado, dá pra adicionar com `npm instal`

    - [] Criar scripts para rodar com o npm
        - Abrir o package.json, ir na parte de scripts e ir em "test". 
        Rodando no terminal `npm run test` ele retorna `Error: no test especified`.
        Criando um "index.js" e colocando um comando, podemos acrescentar aos scripts do package.json  um comando:`"start": "node index.js"` e rodando no terminal com `npm run start` ele roda o script.  Comando `start` é o unico que consigo rodar sem precisar digitar run, outros necessitam. 

 Até agora foi instalado no projeto não num todo.

    - [] Instalar pacote de maneira global
       Para instalar de maneira global, na máquina como um todo,
        deve-se acrescentar `-g`
        Ex: `npm i X -g`
        Nesse caso instalamos o opn, então: `npm i opn -g`
        Não encontraremos node_modules ou nos dados do package.json. Para encontrarmos a rota digitamos `npm root -g`.

    - [] Desinstalar pacotes globais
        Para desisntalar o pacote digitar `npm uninstall X -g`.
        Como instalamos o opn então digitamos: `npm unistall opn -g`.

    - [] Mudar versão de pacotes
 Como exemplo instalaremos moment `npm i moment`. E foi instalado o 
 `"moment": "^2.29.1"`
 Traduzindo:
 major.minor.patch
`path`: significa que está resolvendo algum bug/alguma coisa.
`minor`: significa que vai ter alterações mas que não terá possibilidades de quebrar o que já está acontecendo nesse pacote.
`major`: significa que é a versão do projeto e que poderá até quebrar dependendo do que acontece.
`^`: significa que quando atualizar irá atualizar o path e minor.
`~`: no lugar do anterior significa que irá atualizar apenas o patch.
` `: Nada no lugar do anterior significa não irá atualizar e irá manter a versão fixa.
`*`: No lugar de tudo significa que irá atualizar todas as versões.

`npm outdated`: mostra todos as versões do pacote instalado 
`npm upgrade`: atualiza o pacote instalado.
    As vezes no package aparece escrito versão antiga mas se olharmos no package-lock veremos que está mapeado a que fizemos upgrade.

`npm i x@latest` instala a ultima versão do pacote. Ex: `npm i moment@latest`

- [] Desinstalar pacotes 
        Para desisntalar o pacote digitar `npm uninstall X `.
        Como instalamos o moment então digitamos: `npm uninstall moment`.