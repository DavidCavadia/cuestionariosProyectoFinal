const express = require("express"); // Importa el framework Express
const app = express(); // Crea una instancia de la aplicación Express
const mysql = require("mysql"); // Importa el módulo MySQL para conectarse a la base de datos
const cors = require("cors"); // Importa el módulo CORS para permitir solicitudes desde diferentes dominios

app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes como JSON

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: "localhost", // Host de la base de datos
    user: "root", // Usuario de la base de datos
    password: "", // Contraseña de la base de datos
    database: "cuestionario1" // Nombre de la base de datos
});

// Conexión a la base de datos MySQL
connection.connect((error) => {
    if (error) {
        console.error("Error al conectar a la base de datos:", error);
        return;
    }
    console.log("Conexión exitosa a la base de datos MySQL");
});

// Ruta para manejar la solicitud POST y guardar los resultados en la base de datos
app.post("/guardar-resultados", (req, res) => {
    const respuestas = req.body; // Obtiene las respuestas del cuerpo de la solicitud

    // Convierte las respuestas en un arreglo de valores
    const valores = Object.entries(respuestas).map(([idPregunta, respuesta]) => [idPregunta, respuesta]);

    // Consulta SQL para insertar los resultados en la base de datos
    const query = "INSERT INTO respuestas (idPregunta, respuesta) VALUES ?";
    connection.query(query, [valores], (error, result) => {
        if (error) {
            console.error("Error al insertar los resultados:", error);
            res.status(500).send("Error al guardar los resultados");
            return;
        }
        console.log("Resultados guardados exitosamente en la base de datos");
        res.status(200).send("Resultados guardados exitosamente");
    });
});

// Configuración del puerto en el que escuchará el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});

module.exports = connection; // Exporta la conexión para que pueda ser usada en otros archivos si es necesario













