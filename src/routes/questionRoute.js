import QuestionController from '../controllers/QuestionController';
import auth from '../middleware/auth.middleware';

export default (router) => {
  //Question api
  router.post(`/api/question`, auth, QuestionController.insert);
  router.get(`/api/question`, auth, QuestionController.getAllQuestions);
  router.delete(`/api/question/:id`, auth, QuestionController.delete);
};
