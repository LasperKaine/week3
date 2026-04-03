import { addUser } from '../models/user-model.js';

const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const postUser = async (req, res, next) => {
  try {
    const newUser = await addUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

export { getUsers, postUser };