const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

const orders = [
    {
        id: 1,
        item: 'Product 1',
        price: 1
    },
    {
        id: 2,
        item: 'Product 2',
        price: 2
    },
    {
        id: 3,
        item: 'Product 3',
        price: 3
    }    
];

const port = 3000;

const app = express();

app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/', router);

app.use(express.static(path.join(__dirname, '/client')));

app.get('/orders', (req, res) => {
    console.log('Orders requested');
    res.send(orders);
});

app.post('/orders', (req, res) => {
    console.log('Add orders');
    const order = req.body;
    console.log(order);
    orders.push(order);
});

app.put('/orders', (req, res) => {
    console.log('Orders updated');
    const order = req.body;
    const orderChanged = orders.find((elem) => elem.id === order.id);
    orderChanged.item = order.item;
    orderChanged.price = order.price;
    console.log(order);
});

app.delete('/orders', (req, res) => {
    console.log('Delete orders');    
    const order = req.body;
    const orderIndex = orders.findIndex((elem) => elem.id === order.id);
    orders.splice(orderIndex, 1);  
    console.log(orderIndex);    
});

app.listen(port, () => {
    console.log(`Server is listening on the port: ${port}`);
});