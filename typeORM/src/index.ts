import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express, { Request, Response } from 'express';
import { validate } from 'class-validator';

import { User } from './entity/User';
import { Post } from './entity/Post';

const app = express();
app.use(express.json());

createConnection()
  .then(async () => {
    app.listen(5001, () => console.log('Now listening on port 5000'));

    // CREATE
    app.post('/users', async (req: Request, res: Response) => {
      const { name, email, role } = req.body;
      try {
        const user = User.create({
          name,
          email,
          role,
        });

        const errors = await validate(user);
        console.log(errors);
        if (errors.length > 0) throw errors;

        await user.save();
        return res.status(201).json(user);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    });

    // READ
    app.get('/users', async (_: Request, res: Response) => {
      try {
        const users = await User.find({ relations: ['posts'] });
        return res.json(users);
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'something went wrong' });
      }
    });

    // FIND
    app.get('/users/:uuid', async (req: Request, res: Response) => {
      const uuid = req.params.uuid;
      try {
        const user = await User.findOneOrFail({ uuid });

        return res.json(user);
      } catch (err) {
        console.log(err);
        res.status(404).json({ user: 'user not found' });
      }
    });

    // UPDATE
    app.put('/users/:uuid', async (req: Request, res: Response) => {
      const uuid = req.params.uuid;
      const { name, email, role } = req.body;
      try {
        const user = await User.findOneOrFail({ uuid });

        user.name = name || user.name;
        user.email = email || user.email;
        user.role = role || user.role;

        await user.save();

        return res.json(user);
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'something went wrong' });
      }
    });

    // DELETE
    app.delete('/users/:uuid', async (req: Request, res: Response) => {
      const uuid = req.params.uuid;
      try {
        const user = await User.findOneOrFail({ uuid });
        await user.remove();

        return res.status(204).json({ message: 'User Delete Successfully' });
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'something went wrong' });
      }
    });

    // CREATE A POST
    app.post('/posts', async (req: Request, res: Response) => {
      const { userUuid, title, body } = req.body;
      try {
        const user = await User.findOneOrFail({ uuid: userUuid });
        const post = new Post({ title, body, user });
        await post.save();
        return res.status(201).json(post);
      } catch (err) {
        return res.json(500).json({ error: 'something went wrong' });
      }
    });

    // READ ALL POSTS
    app.get('/posts', async (req: Request, res: Response) => {
      try {
        const post = await Post.find({ relations: ['user'] });
        return res.json(post);
      } catch (err) {
        return res.json(500).json({ error: 'something went wrong' });
      }
    });
  })
  .catch((error) => console.log(error));
