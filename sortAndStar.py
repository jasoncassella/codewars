# You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

# The returned value must be a string, and have "***" between each of its letters.

# You should not remove or add elements from/to the array.

def two_sort(array):
	# sort the array
	array.sort()
	# get the first word of the array
	firstWord = array[0]
	# set the result to an empty string
	result = ""
	# append the first letter of the first word to the result
	result += firstWord[0]
	# get the rest of the first word
	restOfWord = firstWord[1:]
	# append the rest of the letters seperated by ***
	for letter in restOfWord:
		result = result + "***" + letter
	# return the result
	return result

# Test Cases:
print(two_sort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n')
print(two_sort(['clJBt', 'VVDN', 'XKC', 'bjVEag', 'rZhi', 'zolFkug']),'V***V***D***N')