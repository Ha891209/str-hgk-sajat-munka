const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();
const port = 8080;

const swaggerDocument = YAML.load('./docs/swagger.yaml');

app.use('/person', require('./routes'));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));