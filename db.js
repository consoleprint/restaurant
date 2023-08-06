// Database
const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});
var item = sequelize.define('Item', {
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
var order = sequelize.define('Order', {
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
var orderItem = sequelize.define('OrderItem', {
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

order.belongsToMany(item, { through: orderItem });

async function createItems() {
    await sequelize.sync({ force: true });
    await item.create({
        name: "Cheeseburger",
        desc: "A classic cheeseburger with all the fixings.",
        category: "Burgers",
        price: 12,
        imageUrl: "https://www.themealdb.com/images/meals/2204/cheeseburger-150x150.jpg"
    });

    await item.create({
        name: "Chicken Sandwich",
        desc: "A juicy chicken breast on a brioche bun with lettuce, tomato, and mayo.",
        category: "Sandwiches",
        price: 10,
        imageUrl: "https://www.themealdb.com/images/meals/2112/chicken-sandwich-150x150.jpg"
    });

    await item.create({
        name: "French Fries",
        desc: "Classic french fries, crispy on the outside and soft on the inside.",
        category: "Sides",
        price: 5,
        imageUrl: "https://www.themealdb.com/images/meals/2115/french-fries-150x150.jpg"
    });

    await item.create({
        name: "Ice Cream Sundae",
        desc: "A delicious sundae with your choice of ice cream, toppings, and sauces.",
        category: "Desserts",
        price: 8,
        imageUrl: "https://www.themealdb.com/images/meals/1082/ice-cream-sundae-150x150.jpg"
    });
}
exports.startDB = () => {
    createItems()
}
exports.getAllItems = () => {
    return item.findAll()
}
exports.getOrder = (id) => {
    return order.findOne({
        where: {
            id: id
        },
        include: item
    })
}
exports.createOrder = async (requestBody) => {
    let price = 0;
    requestBody.items.map(i => {
        price += (i.item.price * i.amount)
    })
    requestBody.price = price
    let o = await order.create(requestBody)
    await orderItem.bulkCreate(requestBody.items.map(i => {
        return {
            OrderId: o.id,
            ItemId: i.item.id,
            price: i.item.price,
            amount: i.amount
        }
    }))
    return o
}