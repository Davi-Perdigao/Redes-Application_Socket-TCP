const express = require('express'); //tratativa para rota (arquivo estático)
const path = require('path');
const { Socket } = require('socket.io'); //meio de comunicação entre front-end e back-end

const app = express();
const server = require('http').createServer(app); //definindo protocolo http
const io = require('socket.io')(server); //definindo protocolo socket, que chamará a função server

app.use(express.static(path.join(__dirname, 'public'))); //pasta onde ficarão os arquivos públicos do projeto
app.set('views', path.join(__dirname, 'public')); //definindo pasta onde ficarão as views
app.engine('html', require('ejs').renderFile); //definindo a engine como html
app.set('view engine', 'html'); //agora podemos utilizar html nas views do porjeto

app.use('/', (req,res) =>{
    res.render('index.html'); //quando acessar o endereço do servidor padrão, arquivo index.html vai renderizar
});

let messages = []; //array para armazenar todas as mensagens recebidos, já que não há BD

//Definindo a forma de conexão do usuário com o servidor de socket
io.on('connection', socket =>{ //toda vez que um novo cliente se conectar, recebemos o socket
    const ip = socket.handshake.address // atribui para a variavel qual é ip da maquina que esta acessando esse socket 
    console.log(`Socket conectado: ${socket.id}`, `- Ip do Client: ${ip.replace('::ffff:','')}`);

    /*enviando todas as mensagens anteriores assim que o socket conectar na aplicação
    assim, as mensagens apenas serão perdidas se o servidor for reiniciado*/
    socket.emit('previousMessages', messages); 

    socket.on('sendMessage', data =>{ //"ouvir" evento e dados do front-end
        data['ip'] = ip.replace('::ffff:','');//armazena o ip da máquina no JSON onde esta todas as minhas informaçoes como Author, Mensagem e Ip 
        console.log(data)// Informa no console qual foi a mensagem, por quem foi encaminhada e qual o ip de origem de envio 
        messages.push(data); //armazenando as mensagens no array
        socket.broadcast.emit('receivedMessage', data); //enviando mensagem para todos conectados na aplicação
    });
});

server.listen(3000); //definindo porta 
