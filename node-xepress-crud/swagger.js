const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./index.js']

const doc = {
    info: {
      title: 'My API',
      description: 'Description',
    },
    host: 'localhost:5000',
    schemes: ['http'],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            scheme: 'bearer',
            in: 'header',
        },
    },
    security: [
        {
            bearerAuth: [],

        },
    ],

  };

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js')
})