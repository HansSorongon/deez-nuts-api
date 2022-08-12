const deezData = require('./deezData.json')
const app = require('express')();
const PORT = process.env.PORT || 8080

const keys = Object.keys(deezData);

const randomOne = () => {
    const rand = Math.floor(Math.random() * keys.length);

    return deezData[String(rand)];
}

const randomTen = () => {
    const data = {};
    const rand = Math.floor(Math.random() * keys.length);
    for (let i = 0; i < 10; i++) {
        data[String(i)] = deezData[String(rand)]
    };

    return data
}

app.get('/random_one', (req, res) => {
    res.json(randomOne());
})

app.get('/random_ten', (req, res) => {
    res.json(randomTen());
})

app.listen(
    PORT,
    () => console.log(`It's alive on port ${PORT}`)
);


