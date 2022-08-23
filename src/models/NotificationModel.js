import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class NotificationModle {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema(
      {
        title: {
          type: String,
        },
        description: {
          type: String,
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

export default NotificationModle;
