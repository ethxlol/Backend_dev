const names = ['jim', 'dough', 'sal', 'jason', 'alf', 'gary', 'bob'];
const sortedWithoutMutating = names.slice().sort();
console.log(sortedWithoutMutating); // (7) ['alf', 'bob', 'dough', 'gary', 'jason', 'jim', 'sal']
console.log(names); // (7) ['alf', 'bob', 'dough', 'gary', 'jason', 'jim', 'sal']
// ⬆️This will slice than sort, so not mutating the original, just returning a subset of the original⬆️

// ⬇️This will mutate the names array and return it sorted⬇️
names.sort(); // (7) ['alf', 'bob', 'dough', 'gary', 'jason', 'jim', 'sal']
console.log(names); // (7) ['alf', 'bob', 'dough', 'gary', 'jason', 'jim', 'sal']

const numbers = [1, 5, 2, 3, 5, 67, 1, 2, 3];

/*
 * Sort Array in Ascending Order
 * Title: Comparison Function for Ascending Sorting
   The comparison function takes two parameters, 'a' and 'b', representing two elements being compared
	 The purpose of this function is to determine the relative order of 'a' and 'b' in the sorted array
	 By returning -1, we indicate that 'a' should be placed before 'b' in the sorted array
	 By returning 1, we indicate that 'a' should be placed after 'b' in the sorted array
	 By returning 0, we indicate that 'a' and 'b' have the same order and their positions remain unchanged
 */
const ascending = (a, b) => {
	if (a < b) return -1;
	if (a > b) return 1;
	else return 0;
};

const ascendingNumbers = numbers.slice().sort(ascending);
console.log(ascendingNumbers);

/*
 * Sort Array in Descending Order
 * Title: Comparison Function for Descending Sorting
   Similarly, the comparison function takes two parameters, 'a' and 'b', representing two elements being compared
	 However, in this case, we reverse the order of the return values to achieve descending sorting
	 By returning -1, we indicate that 'a' should be placed after 'b' in the sorted array (reverse of ascending)
	 By returning 1, we indicate that 'a' should be placed before 'b' in the sorted array (reverse of ascending)
	 By returning 0, we indicate that 'a' and 'b' have the same order and their positions remain unchanged 
*/
const descending = (a, b) => {
	if (a > b) return -1;
	if (a < b) return 1;
	else return 0;
};

const descendingNumbers = numbers.slice().sort(descending);
console.log(descendingNumbers);
