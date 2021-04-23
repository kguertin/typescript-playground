import 'reflect-metadata';

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);
// console.log(note);
// console.log(height);

// Reflect.defineMetadata('test', 'hey there', plane, 'color');
// const test = Reflect.getMetadata('test', plane, 'color');
// console.log(test);

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('Vrrrrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);

    router.get(path, target.prototype[key]);
  }
}
