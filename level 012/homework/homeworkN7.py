#დავალება N1

for i in range (0, 100, 2):
    print (i)

#დავალება N2

num1 = int(input("Pleace enter Your First Number : "))
if num1 % 2 == 0:
    print("This Number is Even")

else:
    print("This Number Is Odd")


#დაბალება N3

for i in range (0, 1 % 20+1):
    print(i)

#დავალება N4

sum = 0

for number in range(50, 101):
    sum += number


print("Some of numbers from 50 to 100 is:", sum)

#დავალება N5

for i in range(1, 51):
    if i % 5 == 0:
      print(i)

#დავალება N6

num1 = int(input("Pleace Enter Your First Number : "))

num2 = int(input("Pleace Enter Your Secend Number : "))

min_num = min(num1, num2)

max_num = max(num1, num2 + 1)

for i in range(min_num, max_num + 1):
    print (i)
