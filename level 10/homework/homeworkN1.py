
registered_password = "Andria"

while True:
    user_password = input("Please Enter Your Password: ")
    
    if user_password == registered_password:
        print("Succes Log In")
        break
    else:
        print("Try again")

