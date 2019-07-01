import { config } from 'dotenv';
import express from 'express';

// Initialize process.env variables
config();

//create express app
const app=express();

// Set server port
const port = process.env.PORT || 3000;
app.set('port', port);


// Default Route
app.get('/api/v1', (req, res) =>
    res.status(200).json({
    status: 'Success',
    message: 'Welcome to the PropertyPro-Lite API'
    })
);

//404 error handler
app.use((req, res) =>
    res
    .status(404)
    .json({ status: '404 Not Found', message: "This route doesn't exist" })
);

//500 error handler
app.use((err,req, res) =>
    res
    .status(500)
    .json({ status: '500 server error', message: "500 server error" })
);

// Listen for Requests to Server
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
}); 

// Export app for use in test modules
export default app;