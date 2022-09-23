import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class BookmarkModle {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema(
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users',
          required: [true, 'userid required'],
        },
        question: {
          type: Schema.Types.ObjectId,
          ref: 'questions',
          required: [true, 'questionid required'],
        },
      },
      {
        timestamps: true,
      },
    );
    schema.plugin(uniqueValidator);
    mongoose.model('bookmarks', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('bookmarks');
  }

  // eslint-disable-next-line class-methods-use-this
  getModel() {
    return mongoose.model('bookmarks');
  }
}

export default BookmarkModle;
