const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Oysters' },
    { name: 'Apparel' },
    { name: 'Tools' },
    { name: 'Hot Sauce' },
    { name: 'Gift Card' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: '1 Bushel of Oysters',
      description:
        'approx 100',
      image: 'oysters1.jpg',
      category: categories[0]._id,
      price: 60.00,
      // quantity: 500
    },
    {
      name: '1/2 Bushel of Oysters',
      description:
        'approx 50',
      image: 'oysters2.jpg',
      category: categories[0]._id,
      price: 40.00,
      // quantity: 500
    },
    {
      name: 'Shirt',
      category: categories[1]._id,
      description:
        'Roysters Shirt',
      image: 'shirt.jpg',
      price: 30.00,
      // quantity: 20
    },
    {
      name: 'Oyster Knife',
      category: categories[2]._id,
      description:
        'Pry open those suckers',
      image: 'knife.jpg',
      price: 14.99,
      // quantity: 100
    },
    {
      name: 'Shucking Gloves',
      category: categories[2]._id,
      description:
        'Protect those filangies',
      image: 'gloves.jpg',
      price: 29.99,
      // quantity: 30
    },
    {
      name: 'Hot Sauce',
      category: categories[3]._id,
      description:
        'The flavor that brings the heat',
      image: 'flavor.jpg',
      price: 19.99,
      // quantity: 30
    },
    {
      name: '$50 Gift Card',
      category: categories[4]._id,
      description:
        'The Pearl of Roysters',
      image: 'card.jpg',
      price: 50.00,
      // quantity: 100
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
