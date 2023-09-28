// Burgeris
"use strict"

const burger = document.getElementById("burger")
const links = document.querySelector(".links")

burger.addEventListener("click", function(){
    burger.classList.toggle("rotate")
    links.classList.toggle("showNav")
})

// Swiperis
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// Formų validacija
function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
  
    if (firstName === "" || lastName === "" || phoneNumber === "") {
      alert("All fields must be filled out.");
      return false;
    }
  
    return true;
  }

  function validateForm() {
    var firstName1 = document.getElementById("firstName1").value;
    var lastName1 = document.getElementById("lastName1").value;
    var phoneNumber1 = document.getElementById("phoneNumber1").value;
  
    if (firstName1 === "" || lastName1 === "" || phoneNumber1 === "") {
      alert("All fields must be filled out.");
      return false;
    }
  
    return true;
  }

// Input Text Visibility
const inputFields = document.querySelectorAll(".firstName, .lastName, .phoneNumber");
const displayText = document.querySelector(".display-text");


inputFields.forEach(inputField => {
  inputField.addEventListener("input", function() {
    const inputValues = Array.from(inputFields).map(input => input.value.trim());
    const allEmpty = inputValues.every(value => value === "");

    if (allEmpty) {
      // If all input fields are empty, hide the text
      displayText.style.display = "none";
    } else {
      // If at least one input field has content, show the text and set its content
      displayText.style.display = "block";
      displayText.textContent = inputValues.join(" ");
    }
  });
});