let ws
function connect() {
    let server = document.getElementById('server').value
    ws = new WebSocket(server);
    ws.onopen = function () {
        document.getElementById('conn').disabled ='disabled';
        document.getElementById('disconn').disabled = '';
        let nickname = document.getElementById('nickname').value
        if(nickname){
            ws.send('nickname|'+nickname)
        } 
    }
    ws.onclose = function(){
        document.getElementById('conn').disabled = '';
        document.getElementById('disconn').disabled = 'disable';
    }
    ws.onmessage = function(event){
        let board = document.getElementById('board')
        let newmsg = document.createElement('div')
        Console.log(event.data)
        nesmsg.innerHTML = event.data
        board.appendChild(newmsg)
        board.scrollTop = board.scrollHeight;
    }
}
function disconnect(){
    ws.close()
}
function send(){
    let msg = document.getElementById('connect').value
    ws.send(msg)
}