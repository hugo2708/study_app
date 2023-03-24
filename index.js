const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser());
const userRoute = require("./src/route/users/users.route");
const themeRoute = require("./src/route/themes/themes.route");
const topicRoute = require("./src/route/topics/topics.route");
//Ruta raiz
app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/pagina2', function (req, res) {
    res.json({ application: 'Study APP', version: '1.0.0' });
});

//Llamadas a los routes
userRoute(app);
themeRoute(app);
topicRoute(app);

app.listen(3000);