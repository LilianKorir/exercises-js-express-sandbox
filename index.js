const app = require('express')();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// to import css
//app.use(express.static('public'));

app.get('/', (req, res) => {
  let peopleList = getRandomList();
  res.render('index', { people: peopleList });
});
let getRandomList = () => {
  let list = ['you', 'me', 'tana', 'tinashe', 'kimora', 'beatow'];
  let limit = Math.floor(Math.random() * (list.length - 1) + 0);
  return list.slice(limit);
};

app.listen(5000);
