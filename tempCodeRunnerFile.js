const io= socketio(server)

 //if we use socket.broadcast.emit('msg_rcvd',data); then the message will be shown on all the other devices instead of the sender || similary if we use socket.emit('msg_rcvd',data) then the data is semt to the semder's device only. and while using io.emit('msg_rcvd',data) it sends to all including the sender.