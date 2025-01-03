correct_username = "admin"
correct_password = "password123"

username = input("Enter your username: ")
password = input("Enter your password: ")

if username == correct_username and password == correct_password:
    print("Login successful")
else:
    print("Incorrect username or password. Access denied.")
