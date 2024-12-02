import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// DB
import connectDB from './lib/connectDB.js';

// ROUTES
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import webhookRouter from './routes/webhook.route.js';

// CLERK MIDDLEWARE
import { clerkMiddleware, requireAuth } from '@clerk/express';

const port = process.env.PORT || 3000;

const app = express();
// CLERK MIDDLEWARE
app.use(clerkMiddleware());

// WEBHOOK ROUTE
app.use('/webhooks', webhookRouter);

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

// LISTENING TO THE PORT
app.listen(port, () => {
  connectDB();
  console.log(`Server is running at port ${port}`);
});
