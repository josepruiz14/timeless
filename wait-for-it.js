const { exec } = require('child_process');
const mysql = require('mysql2');

// Función para verificar si un puerto está disponible
function checkPort(port) {
    return new Promise((resolve, reject) => {
        const net = require('net');
        const server = net.createServer();

        server.once('error', err => {
            if (err.code === 'EADDRINUSE') {
                resolve(false);
            } else {
                reject(err);
            }
        });

        server.once('listening', () => {
            server.close();
            resolve(true);
        });

        server.listen(port);
    });
}

// Función para verificar la conexión con el servidor MySQL
function checkMySQLConnection(config) {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(config);
        connection.connect(error => {
            if (error) {
                resolve(false);
            } else {
                connection.end();
                resolve(true);
            }
        });
    });
}

// Función para esperar un tiempo determinado
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Puerto que se pasará como argumento
const port = process.argv[2];
const dbPort = 3306; // Puerto de MySQL
const dbConfig = {
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
};

// Verificar si se proporciona el puerto como argumento
if (!port) {
    console.error('Uso: node wait-for-port.js <puerto>');
    process.exit(1);
}

// Esperar 5 segundos antes de la primera comprobación del puerto
(async () => {
    await wait(5000);

    let portIsAvailable = false;
    let dbIsAvailable = false;
    while (!portIsAvailable || !dbIsAvailable) {
        portIsAvailable = await checkPort(port);
        dbIsAvailable = await checkMySQLConnection(dbConfig);
        if (!portIsAvailable || !dbIsAvailable) {
            console.log(`Esperando a que los puertos ${port} y MySQL estén disponibles...`);
            await wait(5000); // Esperar 5 segundos antes de intentar nuevamente
        }
    }

    console.log(`Los puertos ${port} y MySQL están disponibles. Ejecutando comandos...`);

    // Lista de comandos a ejecutar una vez que los puertos estén disponibles
    const commands = [
        'npm run migrate',
        'npm run dev'
    ];

    // Ejecutar los comandos uno por uno
    for (const cmd of commands) {
        console.log(`Ejecutando: ${cmd}`);
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error al ejecutar el comando '${cmd}':`, error);
                return;
            }
            console.log(stdout);
        });
    }
})();
