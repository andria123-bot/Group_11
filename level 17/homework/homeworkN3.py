def even_numbers(numbers):
    even_numbers_list = []

    for num in numbers:
        if num % 2 == 0:
            even_numbers_list.append(num)
        
    return even_numbers_list

print (even_numbers([1,2,3,4,5,6,7,8,9,10]))