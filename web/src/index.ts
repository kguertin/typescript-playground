import { User } from './models/user';

const user = new User({ name: 'NEW_RECORD', age: 0 });

user.save();
