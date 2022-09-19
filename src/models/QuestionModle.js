import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class QuestionModel {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema(
      {
        questionTitle: {
          type: String,
          default: null,
        },
        options: {
          type: [String],
          required: null,
        },
        isPrivate: {
          type: Boolean,
          default: false,
        },
        isExpiration: {
          type: Boolean,
          default: false,
        },
        expireAt: {
          type: Date,
          expires: '2m',
          default: Date.now,
        },
        categoryId: {
          type: Schema.Types.ObjectId,
          ref: 'categorys',
        },
        userId: {
          type: Schema.Types.ObjectId,
          ref: 'users',
        },
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
