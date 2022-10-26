var socket = io('http://192.168.25.198:3000');

function renderMessege(message){ //função para renderizar as mensagens na tela com jquery
    $('.messages').append('<div class="message"><strong>'+message.author+'</strong>:'+message.message+'</div>');
}

socket.on('previousMessages', function(messages){ //"ouvindo" evento emitido pelo back-end e percorrendo array de mensagens 
    for (messages of messages){
        renderMessege(messages)
    }
});

socket.on('receivedMessage', function(message){ //recebendo o objeto enviado pelo back-end
    renderMessege(message);
})

$('#chat').submit(function(event){ //verificando quando o chat for submitado
    event.preventDefault(); //função para não enviar o formulário

    var author = $('input[name=username]').val(); //recebendo o nome do autor
    var message = $('input[name=message]').val(); //recebendo a mensagem

    if(author.length && message.length){ //verificando se existe username ou mensagem informados
        var messageObject = { //enviando um objeto por web socket, não nos limitando a strings ou int, podemos enviar arrays  etc.
            author: author,
            message: message,
        };
        renderMessege(messageObject) //chamando a função assim que enviarmos uma nova mensagem
        socket.emit('sendMessage', messageObject) //enviando o evento da mensagem

        message = document.getElementById('message'); //função para retornar a mensagem por um ID específico.
        message.value = "";
    }
});