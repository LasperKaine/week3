import express from 'express';
import userRouter from './api/routes/user-router.js';
import catRouter from './api/routes/cat-router.js';
import cors from 'cors';

const router = express.Router();

router.use('/cats', catRouter);
router.use('/users', userRouter);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/v1/cats', catRouter);

let cats = [
  {
    cat_id: 1,
    name: 'Milo',
    birthdate: '2022-05-14',
    weight: 4.3,
    owner: 'Kassu',
    image: 'http://localhost:3000/public//home/kaspe/week3/public/funny-surprised-cat-with-a-questioning-pose-a-cute-kitten-asks-in-surprise-where-the-treats-are-generated-ai-photo.webp'
  },
  {
    cat_id: 2,
    name: 'Luna',
    birthdate: '2021-08-20',
    weight: 3.8,
    owner: 'Anna',
    image: 'https://loremflickr.com/320/240/cat'
  }
];

app.get('/api/v1/cats', (req, res) => {
  res.json(cats);
});

app.get('/api/v1/cats/:id', (req, res) => {
  const id = Number(req.params.id);
  const cat = cats.find(c => c.cat_id === id);

  if (!cat) {
    return res.status(404).json({ message: 'Cat not found' });
  }

  res.json(cat);
});

app.post('/api/v1/cats', (req, res) => {
  const newCat = {
    cat_id: cats.length ? cats[cats.length - 1].cat_id + 1 : 1,
    ...req.body
  };

  cats.push(newCat);
  res.status(201).json(newCat);
});

app.put('/api/v1/cats/:id', (req, res) => {
  res.json({ message: 'Cat item updated.' });
});

app.delete('/api/v1/cats/:id', (req, res) => {
  res.json({ message: 'Cat item deleted.' });
});

export default app;