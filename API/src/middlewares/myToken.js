import jwt from 'jsonwebtoken';

// eslint-disable-next-line consistent-return
const validateToken = (req, res, next) => {
  const { token } = req.headers;
  if (!token)
    return res.status(401).json({
      status: '401 unauthorized',
      error: 'Access token is Required'
    });
  jwt.verify(token, process.env.SECRET, (error, result) => {
    if (error)
      return res.status(401).json({
        status: '401 Unauthorized',
        error: 'Access token is Invalid'
      });
    req.data = result.data;
    return next();
  });
};
export default validateToken;
