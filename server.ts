require('dotenv').config();

import express from 'express';
const mongoose = require('mongoose');
const languagesRoutes = require('./routes/languages');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use((req: { method: any; path: any; }, res: any, next: () => void) => {
    console.log('Request logged:', req.method, req.path);
    next();
});

app.use('/api/languages',languagesRoutes);

mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    app.listen(port, () => {
        console.log(`Connected to MongoDB: Server started at http://localhost:${port}`);
    });
}).catch((err: any) => {
    console.log(err);
});


