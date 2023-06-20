# Create a method to see whether a string is ALL CAPS
# Python - 8 kyu

def is_uppercase(input):
    for l in input:
        if l.islower():
            return False
    return True
