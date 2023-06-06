const Student = ({ name, age, gender, university }) => {
	var _name = name;
	var _age = age;
	var _gender = gender;
	var _university = university;

	return {
		getName: () => _name,
		getAge: () => _age,
		getGender: () => _gender,
		getUniversity: () => _university,

		setUniversity: (newUniversity) => (_university = newUniversity),
	};
};

const me = Student({ name: 'Emil', age: 32, gender: 'male', university: 'Noroff' });
console.log(me.getUniversity());
console.log(me.getAge());
console.log(me.getGender());
console.log(me.getName());
// me.setUniversity('Cambridge');
// console.log(me.getUniversity());
console.log(JSON.stringify(me, null, 5)); // since the properties are private variables we cannot get anything but an empty object when we return this

const createPrinter = () => {
	const myFavoriteNumber = 12;

	return () => console.log(`My favorite number is ${myFavoriteNumber}`);
};

const printer = createPrinter();
printer();
// ⬇️ This would not access us the argument in myFavoriteNumber, because its hidden within
console.log(createPrinter());
