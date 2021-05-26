//creating a router
const router = require('express').Router();

//importing files
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');

//configure routes
router.use("/comment", commentRoutes);
router.use("/user", userRoutes);

//export routes
module.exports = router;