import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class CountryModle {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema({
      world: [
        {
          country: {
            type: String,
            default: null,
          },
          population: {
            type: String,
            default: null,
          },
          image: {
            type: String,
            default:
              'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
          },
          states: [
            {
              state: {
                type: String,
                default: null,
              },
              population: {
                type: String,
                default: null,
              },
              image: {
                type: String,
                default:
                  'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
              },
            },
          ],
        },
      ],
    });
    schema.plugin(uniqueValidator);
    mongoose.model('country', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('country');
  }

  // eslint-disable-next-line class-methods-use-this
  getModel() {
    return mongoose.model('country');
  }
}

export default CountryModle;
