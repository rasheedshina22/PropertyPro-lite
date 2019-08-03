import { config } from 'dotenv';
import express from 'express';
import swaggerUI from 'swagger-ui-express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import cookieParser from 'cookie-parser';
import authRoute from './routes/authRoute';
import propertyRoute from './routes/propertyRoute';
import doc from '../../swagger.json';

// Initialize process.env variables
config();

//  create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

// parse application/json
app.use(json());

//  parse cookies
app.use(cookieParser());

// Set server port
const port = process.env.PORT || 3000;
app.set('port', port);

//  use cors only for our routes
app.use(cors());

// Render api-docs
app.use('/api/v1/api-docs', swaggerUI.serve, swaggerUI.setup(doc));
// routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/property', propertyRoute);

// Default Route
app.get('/api/v1', (req, res) =>
  res.status(200).json({
    status: 'Success',
    message: 'Welcome to the PropertyPro-Lite API'
  })
);

//  404 error handler
app.use((req, res) => {
  return res
    .status(404)
    .json({ status: '404 Not Found', message: "This route doesn't exist" });
});

//    500 error handler
app.use((err, req, res) =>
  res
    .status(500)
    .json({ status: '500 server error', message: '500 server error' })
);

// Listen for Requests to Server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

// Export app for use in test modules
export default app;
