import userServices from '../services/userServices';

class AuthController {
  /* eslint camelcase: 0 */
  static async createAccount(req, res) {
    const {
      email,
      first_name,
      last_name,
      password,
      phone_number,
      address,
      description
    } = req.body;

    try {
      const pass = await userServices.encrptPassword(password);
      const user = {
        email,
        first_name,
        last_name,
        address,
        phone_number,
        description,
        password: pass,
        is_admin: false
      };
      const { id } = await userServices.save(user);
      if (id) {
        const token = userServices.generateToken(id, false);
        res.cookie('token', token, {
          maxAge: 86400000,
          httpOnly: true
        });
        return res.status(201).json({
          status: 'success',
          data: {
            token,
            id,
            first_name,
            last_name,
            email,
            description
          }
        });
      }
      throw new Error('Error Creating new User');
    } catch (err) {
      return res.status(500).json({
        status: '500 Internal server error',
        error: 'Error Creating new User'
      });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await userServices.emailExist(email);
      if (!user)
        return res.status(401).json({
          status: '401 Unauthorized',
          error: 'Invalid Email'
        });
      const isMatch = await userServices.verifyPassword(
        password,
        user.password
      );
      if (!isMatch)
        return res.status(401).json({
          status: '401 Unauthorized',
          error: 'Incorrect Password'
        });
      const { id, first_name, last_name, is_admin } = user;
      const token = userServices.generateToken(id, is_admin);
      res.cookie('token', token, {
        maxAge: 86400000,
        httpOnly: true
      });
      return res.status(200).json({
        status: 'success',
        data: {
          token,
          id,
          first_name,
          last_name,
          email
        }
      });
    } catch (e) {
      return res.status(500).json({
        status: '500 Server Interval Error',
        error: 'Internal server error occured'
      });
    }
  }
}
export default AuthController;
