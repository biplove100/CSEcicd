import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Biplove!');
});

app.listen(5000, () => {
    console.log('Server is running on port this is the change');
})