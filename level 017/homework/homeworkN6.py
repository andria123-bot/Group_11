def squared_numbers(numbers):
    squared_numbers_list = []

    for num in numbers:
        squared_numbers_list.append(num * num)

    return squared_numbers_list

print(squared_numbers([1,2,3,4,5]))