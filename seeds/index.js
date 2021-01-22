const seedMeals = require('./meal-seeds');
const seedDiets = require('./diet-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedMeals();
  console.log('\n----- MEALS SEEDED -----\n');

  await seedDiets();
  console.log('\n----- DIETS SEEDED -----\n');

  process.exit(0);
};

seedAll();
