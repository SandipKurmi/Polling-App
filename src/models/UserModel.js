import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import crypto from 'crypto';

class UserModel {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema(
      {
        name: {
          type: String,
          required: [true, 'Please add a name'],
        },
        email: {
          type: String,
          required: [true, 'Please add a email address'],
          unique: true,
          match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email',
          ],
        },
        role: {
          type: String,
          enum: ['user', 'admin'],
          default: 'user',
        },
        phoneNumber: {
          type: Number,
          required: [true, 'Please add a Mobile Number'],
        },
        password: {
          type: String,
          required: [true, 'Please add a Password'],
          minlength: 6,
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date,
      },
      {
        timestamps: true,
      },
    );
    schema.plugin(uniqueValidator);
    mongoose.model('users', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('users');
  }

  // eslint-disable-next-line class-methods-use-this
  getModel() {
    return mongoose.model('users');
  }
}

export default UserModel;
