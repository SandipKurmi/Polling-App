import express from 'express';
import userRoutes from './userRoute';
import notificationRoute from './notificationRoute';
import questionRoute from './questionRoute';
import countryRoute from './countryRoute';

const router = express.Router();

userRoutes(router);
notificationRoute(router);
questionRoute(router);
countryRoute(router);

export default router;
