const express = require("express");

const path = require("path");
const bodyParser =  require("body-parser")
const mainRoute = require("./routes/main");

const gamesRouter = require("./routes/game");

const PORT = 3000;
const app = express();
const cors = require("./middlewares/cors")
app.use(
    cors, // Добавляем CORS самым первым
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
  ) 
app.listen(PORT, () => {
console.log('Приложение запущено тут: http://localhost:${PORT}');
});