let connection;

const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', key => {
        connection.write(handleUserInput(key), () => {
            console.log(key);
        });
    });
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
            return `Move: up`;
        case 's':
            return `Move: down`;
        case 'a':
            return `Move: left`;
        case 'd':
            return `Move: right`;
        default:
            return key;
    }
}

module.exports = {setupInput};