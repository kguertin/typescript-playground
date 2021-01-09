import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express, { Request, Response } from 'express';

import { User } from './entity/User';

const app = express();
app.use(express.json());

createConnection()
  .then(async () => {
    app.listen(5000, () => console.log('Now listening on port 5000'));
    app.post('/users', async (req: Request, res: Response) => {
      const { name, email, role } = req.body;
      try {
        const user = User.create({
          name,
          email,
          role,
        });
        await user.save();

        console.log(user);
        return res.status(201).json(user);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    });
    app.get('/users', async (_: Request, res: Response) => {
      try {
        const users = await User.find();
        return res.json(users);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    });
  })
  .catch((error) => console.log(error));
