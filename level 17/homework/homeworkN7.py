def strings_lengh(strings_list):
    lenght_list = []

    for word in strings_list:
        lenght_list.append(len(word))

    return lenght_list

print (strings_lengh(["andria", "Giorgi"]))