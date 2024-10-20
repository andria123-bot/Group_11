correct_pin = "1234"
balance = 1000.00

pin = input("Enter your PIN: ")
if pin == correct_pin:
    print("PIN correct. Welcome!")
else:
    print("Incorrect PIN. Access denied.")
    exit()

while True:
    print("\nATM Menu:")
    print("1. Withdraw")
    print("2. Deposit")
    print("3. Check Balance")
    print("4. Exit")
    
    choice = input("Choose an option: ")
    
    if choice == '1':  # Withdraw
        amount = float(input("Enter the amount to withdraw: $"))
        if amount > balance:
            print("Insufficient balance.")
        else:
            balance -= amount
            print(f"${amount} withdrawn successfully.")
            print(f"New balance: ${balance:.2f}")
    
    elif choice == '2':  
        amount = float(input("Enter the amount to deposit: $"))
        balance += amount
        print(f"${amount} deposited successfully.")
        print(f"New balance: ${balance:.2f}")
    
    elif choice == '3':  
        print(f"Your current balance is: ${balance:.2f}")
    
    elif choice == '4':  
        print("Thank you for using the ATM. Goodbye!")
        break
    
    else:
        print("Invalid option. Please try again.")
