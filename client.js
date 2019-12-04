const net = require('net');
const { IP, PORT } = require('./constants')
/**
 * Establishes connection with the game server
 */
const commands = { 
    up: `up`, 
    down: `down`, 
    right: `right`, 
    left: `left`}

const connect = function() {
    const conn = net.createConnection({ 
        host: IP,
        port: PORT
    });
// interpret incoming data as text
    conn.setEncoding('utf8'); 

    conn.on('data', (data) => {
        console.log('Server says: ', data);
    });

    conn.on('connect', () => {
        console.log('Successfully connected to game server!');
    });

    conn.write(`Name: EL4`, () => {
        console.log('Sent name');
    });

    conn.write(`Move: up`, () => {
        console.log(`${commands.up}`);
    });

    /*
    setInterval(() => {
    conn.write(`Move: up`, () => {
    console.log(`${commands.up}`);
    });
    } ,50)
    */
    return conn;
}

module.exports = {connect};