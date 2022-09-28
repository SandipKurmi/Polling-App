import Service from './Service';
import { verify } from 'jsonwebtoken';

class QuestionService extends Service {
  constructor(model) {
    super(model);
    this.getAllQuestions = this.getAllQuestions.bind(this);
    this.createQuestions = this.createQuestions.bind(this);
  }

  async createQuestions(req, res) {
    try {
      if (req.headers.authorization) {
        const token = req.headers.authorization.replace('Bearer ', '');
        const decoded = verify(token, process.env.JWT_SECRET_KEY);
        const { id } = decoded;
        // let expireAt = null;
        const {
          questionTitle,
          options,
          isPrivate,
          isExpiration,
          category,
          expireAt,
        } = req.body;

        // if (isExpiration) {
        //   expireAt = new Date();
        // }

        const questionData = {
          questionTitle,
          options,
          isPrivate,
          isExpiration,
          expireAt,
          category,
          user: id,
        };

        if (!questionData) {
          return {
            error: true,
            message: 'error while saving question',
            statusCode: 400,
            data: null,
          };
        }

        const data = await this.model.create(questionData);

        return {
          error: false,
          message: 'Question save successfully',
          statusCode: 200,
          data: data,
        };
      }
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }

  async getAllQuestions(req, res) {
    try {
      const items = await this.model
        .find({ isPrivate: false })
        .populate({ path: 'category', select: 'name description image_url' })
        .populate({
          path: 'user',
          select: 'name image statistics posts followers',
        });

      const topQuestion = await this.model
        .find({
          isPrivate: false,
          createdAt: {
            $gte: new Date(new Date().getTime() - 15 * 24 * 60 * 60 * 1000),
          },
        })
        .populate({ path: 'category', select: 'name image_url' })
        .select(['questionTitle'])
        .sort({ createdAt: -1 })
        .limit(5);

      return {
        error: false,
        message: 'request successfully',
        statusCode: 200,
        data: {
          questions: items,
          topQuestion,
        },
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }
}

export default QuestionService;
