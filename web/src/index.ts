import { User } from './models/user';

const user = new User({ name: 'myName', age: 30 });

user.on('change', () => {});
user.on('change', () => {});
user.on('stop', () => {});

console.log(user);
