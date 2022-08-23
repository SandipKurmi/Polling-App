import express from 'express';
import userRoutes from './userRoute';
import notificationRoute from './notificationRoute';

const router = express.Router();

userRoutes(router);
notificationRoute(router);

export default router;
