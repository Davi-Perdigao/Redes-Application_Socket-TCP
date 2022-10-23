var socket = io('http://192.168.0.107:3000');

        function renderMessege(message){
            $('.messages').append('<div class="message"><strong>'+message.author+'</strong>:'+message.message+'</div>');
        }

        socket.on('previousMessages', function(messages){
            for (messages of messages){
                renderMessege(messages)
            }
        });

        socket.on('receivedMessage', function(message){
            renderMessege(message);
        })


        $('#chat').submit(function(event){
            event.preventDefault();

            var author = $('input[name=username]').val();
            var message = $('input[name=message]').val();

            if(author.length && message.length){
                var messageObject = {
                    author: author,
                    message: message,
                };
                renderMessege(messageObject)
                socket.emit('sendMessage', messageObject)

                message = document.getElementById('messages');
                message.value = "";
            }
        });