import express from 'express';
import { getUsers, postUser } from '../controllers/user-controllers.js';

const userRouter = express.Router();

userRouter.route('/')
  .get(getUsers)
  .post(postUser);

export default userRouter;