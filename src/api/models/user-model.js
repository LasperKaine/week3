const userItems = [
  {
    user_id: 3609,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@metropolia.fi',
    role: 'user',
    password: 'password',
  },
  {
    user_id: 3610,
    name: 'Jane Smith',
    username: 'janesmith',
    email: 'jane@metropolia.fi',
    role: 'admin',
    password: '123456',
  },
];

const listAllUsers = () => userItems;

const findUserById = (id) => userItems.find((user) => user.user_id == id);

const addUser = (user) => {
  const { name, username, email, role, password } = user;
  const newId = userItems[0].user_id + 1;
  const newUser = { user_id: newId, name, username, email, role, password };
  userItems.unshift(newUser);
  return newUser;
};

export { listAllUsers, findUserById, addUser };