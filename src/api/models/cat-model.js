import promisePool from '../../utils/database.js';

const listAllCats = async () => {
    const [rows] = await promisePool.query('SELECT * FROM wsk_cats');
    return rows;
};

const findCatById = async (id) => {
    const [rows] = await promisePool.execute(
      'SELECT * FROM wsk_cats WHERE cat_id = ?', [id]
    );
    return rows[0] || null;
};

const addCat = async (cat) => {
    const { cat_name, weight, owner, filename, birthdate } = cat;
    const sql = `INSERT INTO wsk_cats (cat_name, weight, owner, filename, birthdate)
                 VALUES (?, ?, ?, ?, ?)`;
    const [result] = await promisePool.execute(sql, [cat_name, weight, owner, filename, birthdate]);
    return result.insertId ? { cat_id: result.insertId } : false;
};

const removeCat = async (id) => {
    const [result] = await promisePool.execute(
      'DELETE FROM wsk_cats WHERE cat_id = ?', [id]
    );
    return result.affectedRows ? { message: 'success' } : false;
};

export { listAllCats, findCatById, addCat, removeCat };