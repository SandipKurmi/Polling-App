import express from 'express';
import userRoutes from './userRoute';
import questionRoute from './questionRoute';
import categoryRoute from './categoryRoute';
import bookmarkRoute from './bookmarkRoute';

const router = express.Router();

userRoutes(router);
questionRoute(router);
categoryRoute(router);
bookmarkRoute(router);

export default router;
