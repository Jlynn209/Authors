const express = require('express');
const app = express();
const cors = require('cors')

require('./server/config/mongoose.config')


app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}));
const port = 8000;

require('./server/routes/author.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );