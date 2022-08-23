import NotificationController from '../controllers/NotificationController';
// import auth from '../middleware/auth.middleware';

export default (router) => {
  //Public Route
  router.post(`/api/notification`, NotificationController.insert);
  router.get(`/api/notification`, NotificationController.getAll);
};
