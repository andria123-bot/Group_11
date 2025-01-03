def manual_reverse(collection):
    mobrunebuli = []
    for item in collection:
        mobrunebuli.insert(0, item)
    return mobrunebuli
dalagebuli= [1, 2, 3, 4, 5,6,7,8,9,10]
mobrunebuli = manual_reverse(dalagebuli)
print(mobrunebuli)

