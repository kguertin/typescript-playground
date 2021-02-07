import { User } from './models/user';

const user = new User({ name: 'myName', age: 30 });

console.log(user.get('name'));
console.log(user.get('age'));
