def largest_number(numbers):
    max_number = numbers[0]

    for num in numbers:
        if max_number < num:
            max_number = num
    
    return max_number

print (largest_number([1,2,3,4,5,6,7,8,9,10]))