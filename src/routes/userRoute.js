import UserController from '../controllers/UserController';
import auth from '../middleware/auth.middleware';

export default (router) => {
  //Public Route
  router.post(`/api/register`, UserController.register);
  router.post(`/api/login`, UserController.login);
  router.post(`/api/forgotpassword`, UserController.forgotPassword);
  router.post(
    `/api/reset-password/:id/:token`,
    UserController.userPasswordReset,
  );

  //Protacted Route
  router.get(`/api/user`, auth, UserController.getAll);
  router.put(`/api/followers`, auth, UserController.userFollow);
  router.get(`/api/user/:id`, auth, UserController.get);
  router.put(`/api/user/:id`, auth, UserController.update);
  router.delete(`/api/user/:id`, auth, UserController.delete);
  router.put(`/api/change-password/:id`, auth, UserController.changePassword);
};
