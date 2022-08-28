import Controller from './Controller';
import Question from '../models/QuestionModle';
import QuestionService from '../services/QuestionService';

const questionService = new QuestionService(new Question().getInstance());

class QuestionController extends Controller {
  constructor(service) {
    super(service);
    this.getAllQuestions = this.getAllQuestions.bind(this);
  }

  async getAllQuestions(req, res) {
    let response = await this.service.getAllQuestions(req, res);
    return res.status(response.statusCode).send(response);
  }
}
export default new QuestionController(questionService);
