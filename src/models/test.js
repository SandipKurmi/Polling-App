import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class QuestionModle {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema(
      {
        question: {
          type: String,
          required: [true, 'Please add a Question'],
        },
        options: {
          //Array of strings
          type: [String],
          required: [true, 'Please add catetory'],
          enum: [
            'Economics',
            'History',
            'Business',
            'Computer',
            'Maths',
            'Other',
          ],
        },
        image: {
          type: String,
          default:
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
      },
      {
        timestamps: true,
      },
    );
    schema.plugin(uniqueValidator);
    mongoose.model('notification', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('notification');
  }

  // eslint-disable-next-line class-methods-use-this
  getModel() {
    return mongoose.model('notification');
  }
}

export default QuestionModle;



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
            options: [
              {
                option: {
                  type: String,
                  default: null,
                  required: [true, 'Please add a option for question'],
                },
              },
            ],

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

