const findTheOldest = function(people) {
	let ages = people.sort((a, b) => {
		const ageA = getAge(a);
		const ageB = getAge(b);
		return ageA > ageB ? -1 : 1;
	});
	return ages[0];
};

const getAge = function(person) {
	let death;
	let birth = person.yearOfBirth;
	if ("yearOfDeath" in person == false) {
		death = new Date().getFullYear();
	} else {
		death = person.yearOfDeath;
	}
	return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
