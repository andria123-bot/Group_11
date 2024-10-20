def sum_of_numbers(numbers):
    resoult = 0

    for num in numbers:
        if num > 10:
            resoult = resoult + num
        
    return resoult

print(sum_of_numbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))