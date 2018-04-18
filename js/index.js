"use strict";
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const city = document.getElementById('city');
    const message = document.getElementById('message');

    const params = {
      name: name.value,
      email: email.value,
      city: city.value,
      phone: phone.value,
      message = message.value
    }
    console.log(params)

})