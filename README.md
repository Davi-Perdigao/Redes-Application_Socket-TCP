# Chat Real-Time Socket.io-TCPa

## ❓ O que é um Socket?

Socket provê a comunicação entre duas pontas cliente-servidor (fonte e destino) - também conhecido como two-way communication - entre dois processos que estejam na mesma máquina (Unix Socket) ou na rede (TCP/IP Sockets). Na rede, a representação de um socket se dá por ip:porta, por exemplo: 127.0.0.1:4477 (IPv4). Um socket que usa rede é um Socket TCP/IP, que é o caso dessa aplicação.

Sabendo que TCP/IP é base da nossa comunicação na internet, considerando o modelo de rede OSI, os sockets estão entre a camada de aplicação e a de transporte. Para os processos envolvidos a sensação é que a comunicação está acontecendo diretamente entre eles, no entanto, ela está passando pelas camadas da rede.

## 💻 Projeto
O principal objetivo do trabalho é exemplificar para fins de estudo, o uso de sockets aplicado a um sistema de Chat em tempo real conversando com um servidor em NodeJS. Muito do que fazemos no dia a dia faz uso de sockets, e essa aplicação é um exemplo disso.

## 🚀 Tecnologias

- TCP/IP
- Socket
- NodeJS
- JavaScript, HTML e CSS

## 📡 Como usar?

Para compilar a aplicação, basta que uma máquina inicialize o servidor. Primeiramente, como utilizamos um server em NodeJS, é necessário ter o nome instalado nessa máquina. Feito isso, clone o repositório e siga os seguintes passos:

* Abra o seu Prompt de Comando para descobrir o IP da sua Máquina. Para isso, digite o comando `ipconfig`

* Localize a linha:
```js
Endereço IPv4. . . . . . . .  . . . . . . . :
```
Pronto, agora com a informação do IP da sua máquina, vamos ao repositório

* No arquivo [script.js](https://github.com/Davi-Perdigao/Redes-Application_Socket-TCP/blob/main/public/js/script.js), edite a primeira linha do código com a informação do seu IP:
```js
var socket = io('http://XXX.XXX.XX.XX:3000');
```
⚠ Não altere a porta :3000

* Feito isso, agora basta abrir o terminal da aplicação e executar o comando `node server.js`

✔ Pronto, agora a aplicação já está em execução. Agora, qualquer pessoa através de um computador, notebook ou smartphone pode conectar ao Chat apenas digitando o seu IP + :3000 (`XXX.XXX.XX.XX:3000`) em qualquer navegador. Através do terminal, é possível visualizar em tempo real os Sockets conectados:

![Socket Conectado](https://github.com/Davi-Perdigao/Redes-Application_Socket-TCP/blob/main/public/img_readme.png)

## 👁️ Resultado Final:

 ![x]()

## 📖 Referências
