num1 = int(input("Pleace Enter Your First Number : "))

num2 = int(input("Pleace Enter Your Secend Number : "))

min_num = min(num1, num2)

max_num = max(num1, num2 + 1)

for i in range(min_num, max_num + 1):
    print (i)


