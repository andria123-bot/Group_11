# აქ შევქმენით ფუნქცია სახელად find_last_even მასში შევიყვანეთ პარამეტრი სახელად numbers_list
def find_last_even(numbers_list):
    # აქ შევქმენით for loop მასში გავიგეთ რამდენ ინდექსიანია ფუქციის პარამეტრი ანუ 0 ინდექსიდან დაიწყება
    for i in range(len(numbers_list) - 1, -1, -1):
        # თუ numbers_list იყოფა 2 ზე და მისი ნაშთი არის 0
        if numbers_list[i] % 2 == 0:
            # აქ ვაბრუნებთ პრიველი ლუწი რიცხვი რაც იქნება ის ხდება ფუნქციის დამაბრუნებელი შედეგი
            return numbers_list[i]

# ფუნქცია გამოიძახება და დაბეჭდავს უკანასკნელი ლუწი რიცხვის შედეგს
print(find_last_even([1,2,3,4,5]))