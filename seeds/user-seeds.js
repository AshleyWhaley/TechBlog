const { User } = require('../models');

const userData = [
    {
       username: 'Ashley',
       email: 'ashley@gmail',
       password: 'password1'

    },
    {
        username: 'Peter',
        email: 'mycat@gmail',
        password: 'meow1'
 
     },
     {
      username: 'Penny',
      email: 'mymomsdog@gmail',
      password: 'bark1'

   },
   {
      username: 'Loca',
      email: 'mymomsdog@gmail',
      password: 'bark2'

   },
   {
      username: 'Shiela',
      email: 'mymom@gmail',
      password: 'heyitsmymom1'

   },

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;