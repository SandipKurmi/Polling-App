import QuestionController from '../controllers/QuestionController';
// import auth from '../middleware/auth.middleware';

export default (router) => {
  //Question api
  router.post(`/api/question`, QuestionController.insert);
  router.get(`/api/question`, QuestionController.getAllQuestions);
};
