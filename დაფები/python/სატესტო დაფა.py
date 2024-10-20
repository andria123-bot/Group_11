# sum = 0

# for i in range(1, 50):
#     sum = sum + i

# print(sum)





#while loops


# name = input("Enter Your Name: ")
# while name == "andria":
#     print ("Try agan")


# fruits = ["Apple", "Orange", "Banana", "Coconut", "Watermelon"]

# fruits[1] = "Pineapple"

# for fruit in fruits:
#     print(fruit)

# fruits.append("Pineapple")
# fruits.remove("Pineapple")
# fruits.insert(0, "pineapple")
# fruits.sort()
# fruits.reverse()
# fruits.clear()
# print(fruits.index("Coconut"))
# print(fruits.count("Apple"))
# print(fruits.sum)  კრიბავს



# print(fruits)






# print(len(fruits))
# print("Apple" in fruits)

# print(dir(fruits))
# print(help(fruits))

# print(fruits[::-1])



#age = int(input("Enter Your Age: "))
# password = int(input("Enter Your Password: "))


# while age >=18:
#         print("Try Agan: ")



# while num <= 10:
#     sum = sum + num
#     num = num + 2



# if age >= 18:
#     print("You Can Enter Our Site :-)")


# else:
#     print("You Are Under Age And You Cant Visit Our Site")


# def greet(name):
#     print(f"hi{name}")

# # 1 perform a task
# # 2 - return a value


# def get_greeting(name):
#     return f"Hi{name}"

# messege = get_greeting("Andria")
# open("Content.txt", "W")



# calculate the BMI of a person based on their height and weight entered by the user and classify their BMI category using if-else.



# height = int(input("Pleace Enter Your Height: "))
# weight = int(input("Pleace Enter Your Weight: "))

# height_metres = height / 100.0

# bmi = weight / (height * 2)

# if bmi <18.5:
#     bmi_category = "underweight"

# elif bmi < 25:
#     bmi_category = "Normal weight"

# elif bmi < 30:
#     bmi_category = "Overweight"

# else:
#     bmi_category = "Obesity"

# print(f"Your BMI is: {bmi:.2f}")
# print(f"You are classified as: {bmi_category}")

# def my_range(start, end, step):
#     numbers = []

#     while start < end:
#         numbers.append(start)
#         start = start + step
    
#     return numbers

# print(my_range(0, 10 + 1, 1))

# numbers = []
# for i in range(10, 50+1):
#     numbers.append(i)

# def find_last_even(numbers_list):
#     for i in range (len(numbers_list)-1, -1, -1):
#         if numbers_list[i] % 2 == 0:
#             return numbers_list[i]
# print(find_last_even(numbers))


# numbers = []
# for i in range(10, 50 + 1):
#     numbers.append(i)
# def func(numbers):
#     for index in range(len(numbers) -1, -1, -1):
#         if numbers[index] % 4 == 0:
#             return numbers[index]

# print(func(numbers))
# from turtle import *
# speed(0); hideturtle(); bgcolor("white")
# for i in range(80): forward(i); left(59)
# done()


# 1) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხმარებელს რიცხვის და დაუმატებს მას 1-ს.

# def add_one():
#   a = int(input("Input Number: "))
#   return a + 1

# resoult = add_one()
# print(resoult)

# 2) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს რიცვს და დააბრუნებს "მაგარია!", თუ რიცხვი 10-ზე მეტია.

# def numer_check():
#   a = int(input("Input Number: "))
#   if a > 10:
#     return "You are Very Cool!"
#   return ""

# resoult = numer_check()
# print(resoult)

# 3) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს ორ ციფრს და დააბრუნებს მათ შორის უმცირესს.

# def min_num():
#   a = int(input("First Num: "))
#   b = int(input("Second Num: "))
#   return min(a, b)

# resoult = min_num()
# print(resoult)

# 4) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს ტექსტს და დააბრუნებს ტექსტის სიგრძეს.

# def text_length():
#   txt = input("Input Text: ")
#   return len(txt)

# result = text_length()
# print(result)

# 5) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს ორ რიცხვს და დააბრუნებს მათ ჯამს.

# def sums():
#   a = int(input("First Num: "))
#   b = int(input("Second Num: "))
#   return a + b

# result = sums()
# print(result)

# 5) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს და თუ ის დადებითი იქნება, დააბრუნებს "დადებითი", და თუ უარყოფითი იქნება, "უარყოფითი".

# def if_positive():
#   a = int(input("Enter A Num: "))
#   if a > 0:
#     return "Positive"
#   else:
#     return "Negative"

# resoult = if_positive()
# print(resoult)

# 7) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს რიცხვს და დააბრუნებს True, თუ ის ლუწია  და False, თუ არა.

# def is_positive():
#   a = int(input("Enter A Num: "))
#   if a % 2 == 0:
#     return "Even"
#   else:
#     return "Odd"

# resoult = is_positive()
# print(resoult)

# 8) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს ორ რიცხვს და დააბრუნებს მათ ჯამს დამატებული 5.

# def sum_and_five():
#   a = int(input("First Num: "))
#   b = int(input("Second Num: "))
#   return a + b + 5

# result = sum_and_five()
# print(result)

# num = 0

# while num < 7:
#   num += 3

#   if num == 6:
#     continue

#   print(num)
  