import { User } from './models/user';

const user = new User({ name: 'myName', age: 30 });

user.set({ name: 'newName', age: 999 });

user.set({ name: 'anotherName' });

console.log(user.get('name'));
console.log(user.get('age'));
