
word = input("Enter Your Name : ")

length = len(word)

for i in range(length - 1, -1, -1):
    print(word[i], end="")

print()