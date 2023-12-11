import express from 'express';
import {createNewLot, DeleteElem, findAllState, findCount, findLot, getPartBd, UpdatePriceLot } from './db/lots.js';
import cors from 'cors';
const server = express();
const PORT = process.env.PORT || 4500;
server.set('view engine', 'ejs');
server.set('views', './views');
server.use(express.static('./public'));
server.use(cors());
import bodyParser from "body-parser";

import session from 'express-session'
import multer  from  'multer';
const upload = multer();

server.use(bodyParser.urlencoded({ extended: false }));

server.use(bodyParser.json());


server.use(session({
    secret: 'fjkdsfaj',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
  
  }))
  
  const users = [
    {username: 'admin', password: '12345'},
  ]

let obj = {};

let user_id;

server.get('/', function (req, res) {
    // this is only called when there is an authentication user due to isAuthenticated
    res.render('hello', {user_id});
  })

server.post('/login', upload.none(), function(req, res) {
  console.log(req.body);
  if (users[0].username === req.body.user && users[0].password === req.body.password) {
      req.session.user_id = 1;
      user_id = req.session.user_id;
      res.send(false);
  }
  else {
    res.send(true);
  }
   //res.json({status: 'ok'});

})

const onlyAuth = (req, res, next) => {
   if (user_id) {
    next();
    return;
   }
   res.json({status: true});
}

server.get('/protected_url', onlyAuth, (req, res, next) => {
  res.json({status: false});
})

server.get('/logout', (req, res) => {
  req.session.destroy();
  user_id = 0;
  res.json({status: 'logout'})
})

server.get('/get_length_bd', async(req, res) => {
    console.log('hello get_length_bd');
    const result = await findCount();
    res.send(result);
});

server.post('/get_length_bd_part', async(req, res) => {
    const {selected} = req.body;
    const result = await getPartBd(selected);
    res.send(result);
});

server.get('/get_all_state', async(req, res) => {
    const result = await findAllState();
    res.send(result);
})

server.post('/change_price', async(req, res) => {
    const {id, new_price} = req.body;
    await UpdatePriceLot(id, new_price);
    res.send('price is updated');
});

server.post('/add_card', async(req, res) => {
    const result = await createNewLot(req.body.data);
    res.send(result);
});

server.get('/get_save_card', async(req, res) => {
    console.log(obj);
    res.send(obj);
})


server.post('/save_card', async(req, res) => {
    obj = req.body;
    //console.log(req.body);
    res.send('ok');
});

server.get('/get_bd/:id', async(req, res) => {
    const id = req.params.id;
    const result = await findLot(id);
    res.send(result);
});

server.get('/delete_card/:id', async(req, res) => {
    const id = req.params.id;
    const result = await DeleteElem(id);
    res.send('ok');
});

server.get('/delay/', async(req, res) => {
    const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

    sleep(3000).then(() => {
      res.send('ok');
    });
})

server.listen(PORT, () => {console.log(`server started on PORT: ${PORT}`)});