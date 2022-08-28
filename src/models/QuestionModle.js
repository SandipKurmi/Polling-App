import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class QuestionModel {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema(
      {
        questions: [
          {
            question: {
              type: String,
              default: null,
            },
            options: {
              type: [String],
            },
            qUser: {
              name: {
                type: String,
                default: null,
              },
              image: {
                type: String,
                default:
                  'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
              },
              noOfPosts: {
                type: Number,
                default: null,
              },
              statistics: {
                type: String,
                default: null,
              },
              followers: {
                type: Number,
                default: 50,
              },
            },
          },
        ],
        suggestions: [
          {
            name: {
              type: String,
            },
            image: {
              type: String,
              default:
                'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
            },
          },
        ],
        topQuestions: [
          {
            title: {
              type: String,
              default: null,
            },
          },
        ],
      },
      {
        timestamps: true,
      },
    );
    schema.plugin(uniqueValidator);
    mongoose.model('questions', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('questions');
  }

  // eslint-disable-next-line class-methods-use-this
  getModel() {
    return mongoose.model('questions');
  }
}

export default QuestionModel;
