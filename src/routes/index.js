import express from 'express';
import userRoutes from './userRoute';
import questionRoute from './questionRoute';
import categoryRoute from './categoryRoute';

const router = express.Router();

userRoutes(router);
questionRoute(router);
categoryRoute(router);

export default router;
