# def filter_multiples_of_4(numbers):
#     multiples_of_4 = []
#     for num in numbers:
#         if num % 4 == 0:
#             multiples_of_4.append(num)
#     return multiples_of_4

# filtered_numbers = filter_multiples_of_4(range(1, 21))
# print(filtered_numbers)



# def add_names_to_list():
#     first_name = input("Enter your first name: ")
#     last_name = input("Enter your last name: ")
#     names_list = [first_name, last_name]
#     return names_list

# names = add_names_to_list()
# print(names)



# def process_numbers(start, end):
#     numbers = list(range(start, end + 1))
#     processed_numbers = []
    
#     for num in numbers:
#         if num % 2 == 0:
#             processed_numbers.append(num ** 2)
#         else:
#             processed_numbers.append(num ** 0.5)
    
#     return processed_numbers

# start = int(input("Enter the starting number: "))
# end = int(input("Enter the ending number: "))

# result = process_numbers(start, end)
# print(result)



# def filter_even_index_chars(surname):
#     return [surname[i] for i in range(len(surname)) if i % 2 == 0]

# surname = input("Enter your surname: ")
# filtered_chars = filter_even_index_chars(surname)
# print(filtered_chars)


# filtered_chars_string = ''.join(filtered_chars)
# print(filtered_chars_string)



# def calculate_arithmetic_mean(numbers):
#     if len(numbers) == 0:
#         return 0
#     return sum(numbers) / len(numbers)

# mean = calculate_arithmetic_mean([10, 20, 30, 40])
# print(mean)



# def reverse_word(word):
#     return word[::-1]

# word = input("Enter a word: ")
# reversed_word = reverse_word(word)
# print(reversed_word)



# def remove_duplicates(numbers):
#     return list(set(numbers))

# numbers = [1, 2, 2, 3, 4, 4, 5]
# filtered_numbers = remove_duplicates(numbers)
# print(filtered_numbers)

