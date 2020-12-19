const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values from being added to array
carMakers.push(100);

// Help with map, foreach, etc.
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//flexable types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
importantDates.push('2020-10-10');
importantDates.push(new Date());
importantDates.push(100);
