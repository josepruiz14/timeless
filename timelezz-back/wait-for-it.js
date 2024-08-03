const { exec } = require('child_process');
const mysql = require('mysql2');

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
  let dbIsAvailable = false;
  while (!dbIsAvailable) {
    dbIsAvailable = await checkMySQLConnection(dbConfig);
    if (!dbIsAvailable) {
      console.log(`Esperando a que MySQL esté disponible...`);
      await wait(5000); // Esperar 5 segundos antes de intentar nuevamente
    }
  }

  console.log(`MySQL está disponible. Ejecutando comandos...`);

  // Lista de comandos a ejecutar una vez que los puertos estén disponibles
  const commands = ['npm run migrate'];

  // Función para ejecutar los comandos secuencialmente
  async function executeCommandsSequentially(commands) {
    for (const cmd of commands) {
      console.log(`Ejecutando: ${cmd}`);
      await executeCommand(cmd);
    }
  }

  // Función para ejecutar un comando y esperar a que termine
  function executeCommand(cmd) {
    return new Promise((resolve, reject) => {
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error al ejecutar el comando '${cmd}':`, error);
          reject(error);
          return;
        }
        console.log(stdout);
        resolve();
      });
    });
  }

  // Ejecutar los comandos secuencialmente
  try {
    await executeCommandsSequentially(commands);
    console.log("Todos los comandos han sido ejecutados correctamente.");
  } catch (err) {
    console.error("Error al ejecutar los comandos:", err);
  }
})();
