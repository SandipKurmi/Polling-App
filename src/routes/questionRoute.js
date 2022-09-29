import QuestionController from '../controllers/QuestionController';
import auth from '../middleware/auth.middleware';

export default (router) => {
  //Question api
  router.post(`/api/question`, auth, QuestionController.createQuestions);
  router.get(`/api/question`, auth, QuestionController.getAllQuestions);
  router.delete(`/api/question/:id`, auth, QuestionController.delete);

  //notification
  router.get(`/api/notification`, auth, QuestionController.allNotification);
};
