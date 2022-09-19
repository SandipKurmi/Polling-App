import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class CategoryModle {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema(
      {
        name: {
          type: String,
        },
        description: {
          type: String,
        },
        image_url: {
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
    mongoose.model('categorys', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('categorys');
  }

  // eslint-disable-next-line class-methods-use-this
  getModel() {
    return mongoose.model('categorys');
  }
}

export default CategoryModle;
