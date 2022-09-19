import express from 'express';
import userRoutes from './userRoute';
import questionRoute from './questionRoute';
import countryRoute from './countryRoute';
import categoryRoute from './categoryRoute';

const router = express.Router();

userRoutes(router);
questionRoute(router);
countryRoute(router);
categoryRoute(router);

export default router;
