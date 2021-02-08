import { User } from './models/user';

const user = new User({ name: 'myName', age: 30 });

user.on('change', () => {
  console.log('change 1');
});
user.on('change', () => {
  console.log('change 2');
});
user.on('stop', () => {
  console.log('STOP');
});

user.trigger('stop');
