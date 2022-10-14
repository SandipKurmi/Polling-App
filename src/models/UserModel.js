import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
// import crypto from 'crypto';

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
          type: String,
          required: [true, 'Please add a Mobile Number'],
        },
        password: {
          type: String,
          required: [true, 'Please add a Password'],
          minlength: 6,
        },
        dateOfBirth: {
          type: Date,
          default: null,
          // trim: true,
        },
        gender: {
          type: String,
          enum: ['Male', 'Female'],
        },
        image: {
          type: String,
          default:
            'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
        },
        followers: [{ type: Schema.ObjectId, ref: 'users' }],
        isAdmin: {
          type: Boolean,
          default: false,
        },
        statistics: {
          type: Number,
          default: null,
        },
        posts: {
          type: Number,
          default: null,
        },
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
