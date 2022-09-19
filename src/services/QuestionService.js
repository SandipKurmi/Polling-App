import Service from './Service';
class QuestionService extends Service {
  constructor(model) {
    super(model);
    this.getAllQuestions = this.getAllQuestions.bind(this);
  }

  async getAllQuestions(req, res) {
    try {
      const items = await this.model.find();
      console.log(items);

      return {
        error: false,
        message: 'request successfullly',
        statusCode: 200,
        data: items,
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
