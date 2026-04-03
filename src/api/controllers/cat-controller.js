const cats = [
  { cat_id: 1, name: 'Fluffy', birthdate: '2020-05-10', weight: 4.5, owner: 'John', image: 'https://loremflickr.com/320/240/cat' },
  { cat_id: 2, name: 'Mittens', birthdate: '2021-07-15', weight: 3.8, owner: 'Alice', image: 'https://loremflickr.com/320/240/cat' }
];

export const getCat = (req, res) => res.json(cats);

export const getCatById = (req, res) => {
  const cat = cats.find(c => c.cat_id == req.params.id);
  cat ? res.json(cat) : res.sendStatus(404);
};

export const postCat = (req, res) => {
  const newCat = { cat_id: cats.length + 1, ...req.body };
  cats.push(newCat);
  res.status(201).json({ message: 'New cat added.', result: newCat });
};

export const putCat = (req, res) => res.json({ message: 'Cat item updated.' });

export const deleteCat = (req, res) => res.json({ message: 'Cat item deleted.' });
