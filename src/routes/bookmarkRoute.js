import BookmarkController from '../controllers/BookmarkController';
import auth from '../middleware/auth.middleware';

export default (router) => {
  //Public Route
  router.post(`/api/bookmark`, auth, BookmarkController.insert);
  router.get(`/api/bookmark`, auth, BookmarkController.getAllBookmark);
  router.get(`/api/bookmark/:id`, auth, BookmarkController.get);
  router.put(`/api/bookmark/:id`, auth, BookmarkController.update);
  router.delete(`/api/bookmark/:id`, auth, BookmarkController.delete);
};
