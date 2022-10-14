import bcrypt from 'bcrypt';
import Controller from './Controller';
import User from '../models/UserModel';
import UserService from '../services/UserService';

const userService = new UserService(new User().getInstance());

class UserController extends Controller {
  constructor(service) {
    super(service);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.userPasswordReset = this.userPasswordReset.bind(this);
    this.userFollow = this.userFollow.bind(this);
  }

  // async getUserSuggetions(req, res) {
  //   const response = await this.service.getUserSuggetions(req, res);
  //   return res.status(response.statusCode).send(response);
  // }

  async register(req, res) {
    const hash = bcrypt.hashSync(req.body.password, 10);
    var userData = req.body;
    userData.password = hash;
    let response = await this.service.register(userData);
    return res.status(response.statusCode).send(response);
  }

  async login(req, res) {
    const response = await this.service.login(req.body);
    return res.status(response.statusCode).send(response);
  }

  async changePassword(req, res) {
    const response = await this.service.changePassword(req.body, req.params.id);
    return res.status(response.statusCode).send(response);
  }

  async forgotPassword(req, res) {
    const response = await this.service.forgotPassword(req, res);
    return res.status(response.statusCode).send(response);
  }

  async userPasswordReset(req, res) {
    const response = await this.service.userPasswordReset(req, res);
    return res.status(response.statusCode).send(response);
  }

  async userFollow(req, res) {
    const response = await this.service.userFollow(req, res);
    return res.status(response.statusCode).send(response);
  }
}

export default new UserController(userService);
