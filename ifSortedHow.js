function isSortedAndHow(array) {
	let ascending;
	let descending;
	for (let i = 0; i < array.length; i++) {
		if (array[i] < array[i + 1]) ascending = true;
		else if (array[i] > array[i + 1]) descending = true;
	}
	if ((ascending === true && descending === true) || (ascending === false && descending === false)) return 'no';
	else if (ascending === true) return 'yes, ascending';
	else return 'yes, descending';
}
