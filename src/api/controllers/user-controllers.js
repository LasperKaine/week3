import { addUser, findUserById, listAllUsers } from '../models/user-model.js';
import bcrypt from 'bcrypt';

const getUser = (req, res) => {
  res.json(listAllUsers());
};

const getUserById = (req, res) => {
  const user = findUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const postUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;

  const user = await addUser(req.body);
  res.status(201).json(user);
};

const putUser = (req, res) => {
  // Hardcoded for assignment
  res.json({ message: 'User item updated.' });
};

const deleteUser = (req, res) => {
  // Hardcoded for assignment
  res.json({ message: 'User item deleted.' });
};

if (res.locals.user.role !== 'admin' && res.locals.user.user_id !== parseInt(req.params.id)) {
  return res.sendStatus(403);
}

const sql = userIsAdmin 
  ? 'DELETE FROM wsk_cats WHERE cat_id = ?' 
  : 'DELETE FROM wsk_cats WHERE cat_id = ? AND user_id = ?';

export { getUser, getUserById, postUser, putUser, deleteUser };
