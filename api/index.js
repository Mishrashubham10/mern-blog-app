import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import connectDB from './lib/connectDB.js';

const port = process.env.PORT || 3000;

const app = express();

// MIDDLEWARES
app.use(express.json());

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || 'Something went wrong',
    status: err.status,
    stack: err.stack,
  });
});

// ROUTES
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running at port ${port}`);
});