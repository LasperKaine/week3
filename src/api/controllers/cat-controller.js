import { listAllCats, findCatById, addCat, removeCat } from '../models/cat-model.js';
const getCats = async (req, res) => {
  try {
    const cats = await listAllCats();
    res.json(cats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCat = async (req, res) => {
  try {
    const cat = await findCatById(req.params.id);
    if (!cat) return res.status(404).json({ error: 'Cat not found' });
    res.json(cat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createCat = async (req, res) => {
  try {
    const cat = req.body;
    if (req.file) cat.filename = req.file.filename; // attach uploaded filename
    const result = await addCat(cat);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteCat = async (req, res) => {
  try {
    const result = await removeCat(req.params.id);
    if (!result) return res.status(404).json({ error: 'Cat not found' });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { getCats, getCat, createCat, deleteCat };