lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


def manual_sum(lst):
    total = 0
    for item in lst:
        total += item
    return total



def manual_max(lst):
    max_value = lst[0]
    for item in lst:
        if item > max_value:
            max_value = item
    return max_value



def manual_min(lst):
    min_value = lst[0]
    for item in lst:
        if item < min_value:
            min_value = item
    return min_value



def manual_len(lst):
    count = 0
    for _ in lst:
        count += 1
    return count



def manual_reduce(lst):
    copied_list = []
    for item in lst:
        copied_list.append(item)
    return copied_list


original_list = [1, 2, 3, 4, 5]
copied_list = manual_reduce(original_list)

print("Original List:", original_list)
print("Copied List:", copied_list)


