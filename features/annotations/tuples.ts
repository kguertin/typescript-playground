const drink = {
  color: 'brown',
  carbinated: true,
  sugar: 40,
};

// Type Alias
type Drink = [string, boolean, number];

// annotation is what makes this a tuple, defined items in  the array. consistant order
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 45];
const tea: Drink = ['brown', false, 0];
