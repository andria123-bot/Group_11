def manual_replace(collection, to_replace, replacement):
    replaced_collection = []
    for item in collection:
        if item == to_replace:
            replaced_collection.append(replacement)
        else:
            replaced_collection.append(item)
    return replaced_collection
collection = [1, 2, 3, 2, 4, 2, 5]
to_replace = 2
replacement = 9
new_collection = manual_replace(collection, to_replace, replacement)
print(new_collection)  
