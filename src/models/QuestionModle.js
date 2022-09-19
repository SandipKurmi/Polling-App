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
          default: null,
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
          default: null,
        },
        category: {
          type: Schema.Types.ObjectId,
          ref: 'categorys',
          required: [true, 'Please add a CategoryId'],
        },
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users',
          required: [true, 'userid required'],
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
