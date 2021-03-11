import { User } from './models/User';

const user = new User({ name: 'NEW_RECORD', age: 0 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('user was changed');
});

user.trigger('change');
