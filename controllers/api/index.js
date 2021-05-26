//creating a router
const router = require('express').Router();

//importing files
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./postRoutes');

//configure routes
router.use("/comment", commentRoutes);
router.use("/user", userRoutes);
router.use('/posts', postRoutes);

//export routes
module.exports = router;