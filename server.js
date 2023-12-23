import express from 'express';
import {createNewLot, DeleteElem, findAllState, findCount, findLot, getPartBd, UpdatePriceLot } from './db/lots.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const server = express();
const PORT = process.env.PORT || 4500;
server.set('view engine', 'ejs');
server.set('views', './views');
server.use(express.static('./public'));
server.use(cors());
import bodyParser from "body-parser";
import { get_access_token } from './controllers/auth/index.js';

import session from 'express-session'
import multer  from  'multer';
const upload = multer();

server.use(bodyParser.urlencoded({ extended: false }));

server.use(bodyParser.json());
server.use(cookieParser());

  const users = [
    {username: 'admin', password: '12345'},
  ]

let obj = {};

server.get('/', function (req, res) {
    console.log('index: ', req.cookies);
    res.render('hello');
  })

server.post('/login', upload.none(), async (req, res) => {
  console.log(req.body);
  if (users[0].username === req.body.user && users[0].password === req.body.password) {
    
      const access_token = await get_access_token(1);
      
      res.json({access_token});
  }
  else {
    res.send(false);
  }
})

/*server.get('/logout', async (req, res) => {
    res.json(false);
})*/

/*server.get('/protected_url', onlyAuth, upload.none(), (req, res, next) => {
  res.json({status: false});
})
*/


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