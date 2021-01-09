import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';

createConnection()
  .then(async (connection) => {
    const user = new User();
    user.name = 'Jone Doe';
    user.email = 'john@email.com';
    user.role = 'admin';

    await user.save();
    console.log('user created');
  })
  .catch((error) => console.log(error));
