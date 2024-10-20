print("შავი ბიჭი ბენსიმონებში გეკითხება: 'რა კაცი ხარ?'")
answer = input("შენი პასუხი: ").strip().lower()

if answer == "კარგი":
    print("დაძმაკაცება")
elif answer == "ცუდი":
    print("ცემა")
else:
    print("ფულის ახევა")
