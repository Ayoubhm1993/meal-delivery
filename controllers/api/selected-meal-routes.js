const router = require('express').Router();
const { Meal, User, SelectMeal, Diet } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { selectMeal } = require('../../models/Meal');

// // GET /api/meals/select-meal (get all meal selections)
// router.get('/', (req, res) => {
//     SelectMeal.findAll({
//         attributes: [
//           'id',
//           'user_id',
//           'meal_id'
//         ]
//         // include: [{
//         //   model: User,
//         //   attributes: [
//         //       'username'
//         //   ]
//         // }],
//         // include: [{
//         //   model: Meal,
//         //   attributes: [
//         //       'title'
//         //   ]
//         // }]
//     })
//       .then(dbSelectedMealData => res.json(dbSelectedMealData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });

// // PUT /api/meals/select-meal (select a meal, WITHOUT login auth)
// router.post('/', (req, res) => {
//     SelectMeal.create({
//         user_id: req.body.user_id,
//         meal_id: req.body.meal_id
//     })
//         .then(dbSelectedMealData => res.json(dbSelectedMealData))
//         .catch(err => res.json(err));
// });

// // DELETE /api/meals/select-meal/:id (delete a meal selection, WITHOUT login auth)
// router.delete('/:id', (req, res) => {
//     SelectMeal.destroy({
//         where: {
//           id: req.params.id
//         }
//       })
//         .then(dbselectedMealData => {
//           if (!dbselectedMealData) {
//             res.status(404).json({ message: 'No selected meal found with this id' });
//             return;
//           }
//           res.json(dbselectedMealData);
//         })
//         .catch(err => {
//           console.log(err);
//           res.status(500).json(err);
//         });
// });

// // PUT /api/meals/select-meal (select a meal, WITH login auth)
// // router.put('/select-meal', withAuth, (req, res) => {
// //   // make sure the session exists first
// //   if (req.session) {
// //     // pass session id along with all destructured properties on req.body
// //     Meal.selectMeal({ ...req.body, user_id: req.session.user_id }, { SelectMeal, User })
// //       .then(updatedSelectMealData => res.json(updatedSelectMealData))
// //       .catch(err => {
// //         console.log(err);
// //         res.status(500).json(err);
// //       });
// //   }
// // });

// // NOTE: NEW ROUTE NEEDED FOR REMOVING MEAL SELECTION

module.exports = router;