total_sum = 0
adding = True

while adding:
    number = input("Enter a number (or type 'stop' to end): ")

    if number.lower() == 'stop':
        adding = False
    else:
        total_sum += float(number)

print(f"The total sum is: {total_sum}")
