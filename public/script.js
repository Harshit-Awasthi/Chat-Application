let socket = io();

$('#loginBox').show();
$('#chatBox').hide();

$('#btnStart').click(() => {
  socket.emit('login', {
    username: $('#inpUsername').val(),
    password: $('#inpPassword').val(),
  });
});

socket.on('logged_in', () => {
  $('#loginBox').hide();
  $('#chatBox').show();
});

socket.on('login_failed', () => {
  window.alert('Username or Password wrong');
});

$('#btnSendMsg').click(() => {
  socket.emit('msg_send', {
    to: $('#inpToUser').val(),
    msg: $('#inpNewMsg').val(),
  });
  // Clear the input field after sending the message
  $('#inpNewMsg').val('');
});

socket.on('msg_rcvd', (data) => {
  // Create a new message element
  const messageElement = $('<div class="message"></div>');
  
  // Display the sender's name
  messageElement.append($('<span class="message-sender"></span>').text(data.from + ": "));
  
  // Display the message text
  messageElement.append($('<span class="message-text"></span>').text(data.msg));
  
  // Append the message element to the chat container
  $('.chat-messages').append(messageElement);
  
  // Scroll to the bottom of the chat container to show the latest message
  const chatContainer = $('.chat-container');
  chatContainer.scrollTop(chatContainer[0].scrollHeight);
});
