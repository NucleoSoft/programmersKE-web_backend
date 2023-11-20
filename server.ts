require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT;

app.use((req: { method: any; path: any; }, res: any, next: () => void) => {
    console.log('Request logged:', req.method, req.path);
    next();
});

app.get('/', (req: any, res: { json: (arg0: { message: string; }) => void; }) => {
    res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
