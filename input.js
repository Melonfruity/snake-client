let connection;
let command = `Move: up`

const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', key => {
        handleUserInput(key);
    });
    console.log(stdin);
    return stdin;
  }

const handleUserInput = (key) => {

    if(key === `\u0003`){
        process.exit();
    } else if(key === 'm'){
        return `Say: Yoou`;
    }
    switch (key) {
        case 'w':
            command = `Move: down`;
            break;
        case 's':
            command = `Move: down`;
            break;
        case 'a':
            command = `Move: left`;
            break;
        case 'd':
            command = `Move: right`;
            break;
        default:
            break;
    }
}

setInterval(() => {
    connection.write(command, () => {
        console.log('moving');
    })
}, 300);

module.exports = {setupInput};