def manual_count(collection, value):
    count = 0
    for item in collection:
        if item == value:
            count += 1
    return count

# მაგალითი გამოყენება:
collection = [1, 2, 3, 2, 4, 2, 5]
value_to_count = 2
count = manual_count(collection, value_to_count)
print(count)  # 3
