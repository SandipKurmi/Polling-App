import Controller from './Controller';
import Question from '../models/QuestionModle';
import QuestionService from '../services/QuestionService';
const questionService = new QuestionService(new Question().getInstance());

import User from '../models/UserModel';
import UserService from '../services/UserService';
const userService = new UserService(new User().getModel());

class QuestionController extends Controller {
  constructor(service, userService) {
    super(service);
    this.userService = userService;
    this.getAllQuestions = this.getAllQuestions.bind(this);
    this.createQuestions = this.createQuestions.bind(this);
    this.allNotification = this.allNotification.bind(this);
  }

  async createQuestions(req, res) {
    let response = await this.service.createQuestions(req, res);
    return res.status(response.statusCode).send(response);
  }

  async getAllQuestions(req, res) {
    let response = await this.service.getAllQuestions(req, res);
    if (response) {
      const { data } = await this.userService.getUserSuggetions();
      response.data.suggetions = data;
    }
    return res.status(response.statusCode).send(response);
  }

  async allNotification(req, res) {
    let response = await this.service.allNotification(req, res);
    return res.status(response.statusCode).send(response);
  }
}
export default new QuestionController(questionService, userService);
