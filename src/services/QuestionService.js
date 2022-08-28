import Service from './Service';
class QuestionService extends Service {
  constructor(model) {
    super(model);
    this.getAllQuestions = this.getAllQuestions.bind(this);
  }

  async getAllQuestions(req, res) {
    try {
      const items = await this.model.find().select(['-_id']);

      if (items) {
        const { questions, suggestions, topQuestions } = items[0];
        return {
          error: false,
          message: 'request successfullly',
          statusCode: 200,
          data: {
            questions,
            suggestions,
            topQuestions,
          },
        };
      }
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }
}

export default QuestionService;
