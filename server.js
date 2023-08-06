const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});
var db = {}
async function setupDB() {
    try {
        db.Item = sequelize.define('Item', {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            desc: {
                type: DataTypes.STRING,
                allowNull: false
            },
            state: {
                type: DataTypes.ENUM(['draft', 'live', 'archived']),
                defaultValue: 'live',
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER,
                defaultValue: 5,
                allowNull: false,
            },
            imageUrl: {
                type: DataTypes.STRING,
                allowNull: false
            },
        });

        db.Order = sequelize.define('Order', {
            date: {
                type: DataTypes.DATE,
                defaultValue: new Date(),
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        });

        db.OrderProduct = sequelize.define('OrderProduct', {
            count: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        });

        db.Order.belongsToMany(db.Item, { through: db.OrderProduct });
        await sequelize.sync({ force: true });

        await db.Item.create({
            name: "Chocolate Cake",
            desc: "A rich and decadent chocolate cake with a creamy frosting.",
            category: "main",
            price: 5,
            imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
        });

        await db.Item.create({
            name: "Chicken Parmesan",
            desc: "A classic Italian dish of breaded chicken cutlets topped with tomato sauce.",
            category: "main",
            price: 10,
            imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288'
        });

        await db.Item.create({
            name: "Steak and Potatoes",
            desc: "A hearty dish of grilled steak served with mashed potatoes and a side of vegetables.",
            category: "main",
            price: 6,
            imageUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f'
        });

        await db.Item.create({
            name: "Lasagna",
            desc: "A layered pasta dish with tomato sauce, meat sauce, and cheese.",
            category: "main",
            price: 7,
            imageUrl: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'
        });

        await db.Item.create({
            name: "Pizza",
            desc: "A savory dish of dough topped with tomato sauce, cheese, and your choice of toppings.",
            category: "main",
            price: 3,
            imageUrl: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'
        });

    } catch (error) {
        console.error(error);
    }
}

async function startServer() {
    try {
        await setupDB()
        const port = 3001
        const express = require('express')
        const app = express()
        app.use(express.json());

        app.get('/', (req, res) => {
            res.send('hello world')
        })
        app.get('/api/items', (req, res) => {
            db.Item.findAll({
                where:{
                    state: 'live'
                }
            }).then(products => {
                res.json(products)
            })
        })
        app.post('/api/orders', (req, res) => {
            let createdOrder ;
            let price = 0;
            req.body.items.map(i=>{
                price+=(i.price * i.count)
            })
            req.body.price = price
            db.Order.create(req.body).then(r => {
                createdOrder = r
                let orderProducts = []
                req.body.items.map(i=>{
                    orderProducts.push({
                        OrderId: createdOrder.id,
                        ItemId: i.id,
                        count: i.count,
                        price: i.price
                    })
                })
                return db.OrderProduct.bulkCreate(orderProducts)
            }).then(()=>{
                return res.json(createdOrder)
            })
        })
        app.get('/api/orders/:id', (req, res) => {
            db.Order.findOne({
                where: {
                    id: req.params.id
                },
                include: db.Item
            }).then(p => {
                res.json(p)
            });
        })
        app.get('/api/items/:id', (req, res) => {
            db.Item.findOne({
                where: {
                    id: req.params.id
                }
            }).then(p => {
                res.json(p)
            });
        })
        app.use(express.static('frontend/dist'));
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.error(error);
    }
}

startServer()