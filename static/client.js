var socket = io();

socket.on('message', function(msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  document.getElementById('messages').appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

function sendMessage() {
  var input = document.getElementById('myMessage');
  if (input.value.trim() !== '') {
    socket.send(input.value);
    input.value = '';
  }
}
