
const button = document.getElementById('myButton');
const div = document.getElementById('myDiv');

// Add an event listener to the button
button.addEventListener('click', () => {
    div.textContent = 'Hallo ,welcome to my first js assignment';
});
// Get the list, input, and button elements
const list = document.getElementById('list');
const newItemInput = document.getElementById('new-item');
const addBtn = document.getElementById('add-btn');

// Add event listener to the button
addBtn.addEventListener('click', () => {
  // Get the value of the text input
  const newItemValue = newItemInput.value.trim();
  if (newItemValue !== '') {
    const newListItem = document.createElement('li');
    newListItem.textContent = newItemValue;
    list.appendChild(newListItem);
    newItemInput.value = '';
  }
});
// Get the image and button elements
const myImage = document.getElementById('my-image');
const changeBtn = document.getElementById('change-btn');
const imageSources = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2AdqXRSWg6jVJ4fqdOBZtNO50FKg9SN93J_FCnYJafd03GOHR4Xbo4QF06AYi8ZvvYA0&usqp=CAU', 'https://www.pngimages.in/uploads/png-webp/2022/2022-August/Dog_www_png_image.webp', 'https://png.pngtree.com/element_pic/00/16/07/19578dcf4437384.png'];
let currentIndex = 0;
changeBtn.addEventListener('click', () => {
  currentIndex = (currentIndex+1) % imageSources.length;
  myImage.src = imageSources[currentIndex];
});


var nameError = document.getElementById('name-Error');
var phoneError = document.getElementById('Phone-Error');
var emailError = document.getElementById('email-Error');
var messageError = document.getElementById('message-Error');
var submitError = document.getElementById('submit-Error');

function validateName(){
  var name = document.getElementById('contact-name').value;

  if(name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;

  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write Full Name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}


function validatePhone(){
var phone = document.getElementById('contact-phone').value;

if(phone.length == 0){
  PhoneError.innerHTML = 'Phone is required';
  return false;

}
if(phone.length !== 10){
  phoneError.innerHTML = 'Phone Number Should Be 10 digits';
  return false;

}

phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail(){
  var email = document.getElementById('contact-Email').value;
  
  if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Iinvalid Email';
    return false;
  }
  
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }



  function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 40;
    var left = required - message.length;
    if(left > 0){
      messageError.innerHTML = left + ' more characters require';
      return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }



  function validateForm(){

    if(!validateName() || !validateForm() || !validatePhone() || !validateMessage()){
       submitError.innerHTML = "please check the required fields";
      return false;
    }

  }