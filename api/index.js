import express from 'express';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import connectDB from './lib/connectDB.js';

const port = process.env.PORT || 3000;

const app = express();

// ROUTES
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running at port ${port}`);
});