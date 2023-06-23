# Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

# The output should be two capital letters with a dot separating them.

# It should look like this:

# Sam Harris => S.H

# patrick feeney => P.F

def abbrev_name(name):
    nameArray = name.split(' ')
    firstName = nameArray[0].capitalize()
    lastName = nameArray[1].capitalize()
    return firstName[0] + '.' + lastName[0]


# Test Cases:
print(abbrev_name("Sam Harris"), "S.H")
print(abbrev_name("patrick feenan"), "P.F")
print(abbrev_name("Evan C"), "E.C")
print(abbrev_name("P Favuzzi"), "P.F")
print(abbrev_name("David Mendieta"), "D.M")
