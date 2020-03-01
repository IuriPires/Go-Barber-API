import { Router } from 'express';
import User from './app/models/Users'

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Iuri Pires da Rocha',
    email: 'iuripires.work@gmail.com',
    'password_hash': '12373847',
    provider: false
  })

  return res.json(user);
});

export default routes;
