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
                defaultValue: 'draft',
                allowNull: false
            },
            category: {
                type: DataTypes.ENUM(['appetizer', 'main', 'dessert']),
                defaultValue: 'main',
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
        });
        db.Order.belongsToMany(db.Item, { through: 'OrderProduct' });

        await sequelize.sync({ force: true });
        await db.Item.create({
            name: "Chocolate Cake",
            desc: "A rich and decadent chocolate cake with a creamy frosting.",
            category: "main",
            imageUrl: 'https://picsum.photos/200/300'
        });

        await db.Item.create({
            name: "Chicken Parmesan",
            desc: "A classic Italian dish of breaded chicken cutlets topped with tomato sauce and melted mozzarella cheese.",
            category: "main",
            imageUrl: 'https://picsum.photos/200/300'
        });

        await db.Item.create({
            name: "Steak and Potatoes",
            desc: "A hearty dish of grilled steak served with mashed potatoes and a side of vegetables.",
            category: "main",
            imageUrl: 'https://picsum.photos/200/300'
        });

        await db.Item.create({
            name: "Lasagna",
            desc: "A layered pasta dish with tomato sauce, meat sauce, and cheese.",
            category: "main",
            imageUrl: 'https://picsum.photos/200/300'
        });

        await db.Item.create({
            name: "Pizza",
            desc: "A savory dish of dough topped with tomato sauce, cheese, and your choice of toppings.",
            category: "main",
            imageUrl: 'https://picsum.photos/200/300'
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
            db.Item.findAll().then(products => {
                res.json(products)
            })
        })
        app.post('/api/orders', (req, res) => {
            db.Order.create(req.body).then(item => {
                res.json(item)
            })
        })
        app.get('/api/items/:id', (req, res) => {
            db.Item.findOne({
                where: {
                    id: req.params.id
                },
            }).then(p => {
                res.json(p)
            });
        })
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.error(error);
    }
}

startServer()