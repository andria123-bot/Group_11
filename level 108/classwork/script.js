fetch('idk.com/data')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data: ', error));



// fetch ფუნქცია აგზავნის HTTP მოთხოვნებს კონტკეტული ბაზიდან
// .then ფუნქციას ვიყენებთ მაშინ როდესაც დაპირება შესრულდება და მაშინ გაეშვება მითითებული ფუნქცია
// .catch ფუნქიას ვიყენებთ მაშინ როდესაც დაპირება არ შესრულდება და მაშინ გაეშვება მითითებული ფფუნქცია