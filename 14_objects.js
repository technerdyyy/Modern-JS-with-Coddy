const car = {
	name: 'Tesla',
	model: 'S',
	weight: 2250,
	color: 'white'
};

// To access a property in an object, we use dot notation :
console.log(car.name); // Output: 'Tesla'
console.log(car.model); // Output: 'S'

// We can also add methods to an object using function expressions :
const cat = {
    meow: () => console.log('MEOWWW'),
};

cat.meow(); // Output: 'MEOWWW'

// We could also use bracket notation to access values, but it's less common :
console.log(car['name']); // Output: 'Tesla'
