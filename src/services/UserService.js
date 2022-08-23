import Service from './Service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import transporter from '../config/emailConfig';

class UserService extends Service {
  constructor(model) {
    super(model);
    this.login = this.login.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
  }

  //login user
  async login(item) {
    try {
      let user = await this.model.findOne({ email: item.email });
      if (user) {
        let results = await bcrypt.compareSync(item.password, user.password);
        if (results) {
          const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '7d' },
          );

          return {
            error: false,
            message: 'login successfully',
            statusCode: 200,
            token: token,
            data: user,
          };
        } else {
          return {
            error: 'You entered the wrong email or password',
            statusCode: 401,
            data: null,
          };
        }
      } else {
        return {
          error: 'You entered the wrong email or password',
          statusCode: 401,
          data: null,
        };
      }
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }

  //change password with current password
  async changePassword(item, id) {
    try {
      let user = await this.model.findOne({ _id: id });
      if (user) {
        let results = await bcrypt.compareSync(
          item.currentPassword,
          user.password,
        );
        if (results) {
          let hash = await bcrypt.hashSync(item.newPassword, 10);
          let update = await this.model.findByIdAndUpdate(user._id, {
            password: hash,
          });
          return {
            error: false,
            message: 'password changed successfully',
            statusCode: 200,
            data: update,
          };
        } else {
          return {
            error: 'You entered wrong currant password',
            statusCode: 400,
            data: null,
          };
        }
      } else {
        return {
          error: 'You entered wrong currant password',
          statusCode: 400,
          data: null,
        };
      }
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }

  async forgotPassword(req, res) {
    try {
      const user = await this.model.findOne({ email: req.body.email });
      if (!user) {
        return {
          error: 'There is no user with that email',
          statusCode: 404,
          data: null,
        };
      }
      const secret = user._id + process.env.JWT_SECRET_KEY;
      const token = jwt.sign({ userId: user._id }, secret, {
        expiresIn: '15m',
      });
      const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`;

      let info = await transporter.sendMail({
        from: process.env.EMAIL_FROM, // sender address
        to: user.email, // list of receivers
        subject: 'Pool App passowrd reset link', // Subject line
        text: 'Hello world?', // plain text body
        html: `<a href=${link}>Click Hear</a> to Reset Your Password`, // html body
      });

      return {
        error: false,
        message: 'Password Reset Email Sent... Plice Check Your Email',
        statusCode: 200,
        info: info,
        link: link,
        data: user,
      };
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }

  async userPasswordReset(req, res) {
    const { password, password_confirmation } = req.body;

    const { id, token } = req.params;

    const user = await this.model.findById(id);

    const new_secret = user._id + process.env.JWT_SECRET_KEY;

    try {
      const result = jwt.verify(token, new_secret);

      if (password && password_confirmation) {
        if (password !== password_confirmation) {
          return {
            error: `Both password is not matching`,
            statusCode: 400,
            data: null,
          };
        } else {
          let hash = await bcrypt.hashSync(password, 10);
          let update = await this.model.findByIdAndUpdate(user._id, {
            password: hash,
          });
          return {
            error: false,
            message: 'password Reset successfully',
            statusCode: 200,
            data: update,
          };
        }
      } else {
        return {
          error: `All fields are required`,
          statusCode: 400,
          data: null,
        };
      }
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }
}

export default UserService;
