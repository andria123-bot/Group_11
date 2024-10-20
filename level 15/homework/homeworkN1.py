# input1 = int(input("Enter number: "))

# if input1 % 2 == 0:
#   print("Thins number is Even")
#   print(input1 + 1)

# else:
#   print("This number is Odd")
#   print(input1 + 1)



# correctPassword = "GoaBest"
# count = 0

# while True:
#   userInput = input("Enter Your Password: ")
#   if userInput == correctPassword:
#     print("Password Correct!")
#     break
#   else:
#     count += 1
#     print("Incorrect Password. Try Agan")

# print(f"Total Incorrect attempts: {count}")



# word = "Andria"

# if len(word) > 0 and word[0] == "G":
#   print("True")
# else:
#   print("False")



# names = []

# for i in range(5):
#   name = input(f"Enter Your Name{i + 1}: ")
#   names.append(name)

# print("The first three names are:", names[:5])

# number = int(input("Enter a number: "))

# if number <= 1:
#     print(f"{number} is not a prime number.")
# else:
#     is_prime = True
#     for i in range(2, int(number**0.5) + 1):
#         if number % i == 0:
#             is_prime = False
#             break

#     if is_prime:
#         print(f"{number} is a prime number.")
#     else:
#         print(f"{number} is not a prime number.")



# number = 10
# while number >= 0:
#     print(number)
#     number -= 1



# num1 = float(input("Enter the first number: "))
# operator = input("Enter the operator (+, -, *, /, **): ")
# num2 = float(input("Enter the second number: "))

# if operator == '+':
#     result = num1 + num2
# elif operator == '-':
#     result = num1 - num2
# elif operator == '*':
#     result = num1 * num2
# elif operator == '/':
#     if num2 != 0:
#         result = num1 / num2
#     else:
#         result = "Error: Division by zero is not allowed."
# elif operator == '**':
#     result = num1 ** num2
# else:
#     result = "Error: Invalid operator."

# print("The result is:", result)



# name = input("Enter your name: ")
# print("The last character is:", name[-1])



# number = int(input("Enter a number: "))
# even_numbers = []

# for i in range(0, number + 1):
#     if i % 2 == 0:
#         even_numbers.append(i)

# print("The list of even numbers is:", even_numbers)



# number = int(input("Enter a whole number: "))

# if number < 0:
#     print("Factorial is not defined for negative numbers.")
# else:
#     factorial = 1
#     for i in range(1, number + 1):
#         factorial *= i
#     print(f"The factorial of {number} is:", factorial)



