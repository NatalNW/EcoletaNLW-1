import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('Hello mama!!');

    res.json(['Hello again!']);   
});

app.listen(3333);