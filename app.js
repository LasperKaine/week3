import express from 'express';

const app = express();
const PORT = 3000;

app.use('/public', express.static('public'));

app.get('/api/v1/cats', (req, res) => {
  const cat = {
    cat_id: 1,
    name: 'Milo',
    birthdate: '2022-05-14',
    weight: 4.3,
    owner: 'Kassu',
    image: 'http://localhost:3000/public//home/kaspe/week3/public/funny-surprised-cat-with-a-questioning-pose-a-cute-kitten-asks-in-surprise-where-the-treats-are-generated-ai-photo.webp'
  };

  res.json(cat);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});