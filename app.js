const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const app = express();
const PORT = config.get('port') || 5000;
const MONGO_URL = config.get('mongoUrl');
const routerAuth = require('./routes/routesAuth'); 
const routerUser = require('./routes/routesUser'); 
const routerTasks = require('./routes/routesTasks');

app.use(cors());
app.use(express.json({ extended: true }));
app.use('/api/auth', routerAuth);
app.use('/api/user', routerUser);
app.use('/api/tasks', routerTasks);

async function startServer() {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            useCreateIndex: true
        });
        app.listen(PORT, () => console.log(`===> Server has been started on port ${PORT}`));
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

startServer();