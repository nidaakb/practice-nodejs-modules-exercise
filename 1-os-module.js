// Leer README
const os = require('os');

// Return nombre del dispositivo
console.log("Nombre del dispositivo: ",os.type());

// Return versión del sistema operativo
console.log("Versión del sistema operativo: ",os.version());

// Return memoria ram total en GB
console.log("RAM Instalada: ",os.totalmem()/ (1024**3));