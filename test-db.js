import promisePool from './src/utils/database.js';

const test = async () => {
  try {
    const [cats] = await promisePool.query('SELECT * FROM wsk_cats');
    console.log('Cats:', cats);

    const [users] = await promisePool.query('SELECT * FROM wsk_users');
    console.log('Users:', users);
  } catch (err) {
    console.error(err);
  }
};

test();