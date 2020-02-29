const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Rest API for Note-taking App",
            description: "Note-taking App API Information",
            contact: {
                name: "Sandip"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ['./note-app/routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
