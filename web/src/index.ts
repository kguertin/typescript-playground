import { User } from './models/User';

const user = new User({ name: 'NEW_RECORD', age: 0 });

user.save();
user.events.on('click', () => console.log('THIS IS A CLICK'));
user.events.on('click', () => console.log('THIS IS ANOTHER CLICK'));

user.events.trigger('click');
