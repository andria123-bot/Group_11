document.getElementById('age-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value); // აქ ჩვენ მოგვაქვს htmlდან კლასები
  const year = parseInt(document.getElementById('year').value);

  // ვქმნით ცვლადებს 
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  // ვქმნით ცვლადებს დღე / თვე / წლის რადგან უფრო გაგვიმარტივდეს მუშაობა
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // აქ ნეგატიურ დღეს უარყოფს რომ კოდმა გამართულად იმუშაოს
  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  // აქ ნეგატიურ თვეს უარყოფს რომ კოდმა გამართულად იმუშაოს
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  // აქ ვუცვლით ტექსტურ მონაცემს ახალი მონაცემებით 
  document.getElementById('years').textContent = ageYears;
  document.getElementById('months').textContent = ageMonths;
  document.getElementById('days').textContent = ageDays;
});
