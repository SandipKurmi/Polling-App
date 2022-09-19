import CategoryController from '../controllers/CategoryController';
import auth from '../middleware/auth.middleware';

export default (router) => {
  //Public Route
  router.post(`/api/category`, auth, CategoryController.insert);
  router.get(`/api/category`, auth, CategoryController.getAll);
  router.get(`/api/category/:id`, auth, CategoryController.get);
  router.put(`/api/category/:id`, auth, CategoryController.update);
  router.delete(`/api/category/:id`, auth, CategoryController.delete);
};
