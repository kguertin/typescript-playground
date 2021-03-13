import { User } from './models/User';

const user = new User({ id: 1, name: 'newest name', age: 1666 });

user.on('save', () => {
  console.log(user);
});

user.save();
