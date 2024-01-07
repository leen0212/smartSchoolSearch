let availableKeywords = [
    'American School',
    'Jordanian International School',
    'Oxford School',
    'Etihad School',
    'Sands School',
    'Rosary School',
    'Canadian International School',
    'Cambridge High School',
    'The International Academy',
    'AlManhal International Schools',
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });

        console.log(result);
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}


// Input fields
function resetForm() {
  // Reset all input fields
  var inputs = document.querySelectorAll('.input-field');
  inputs.forEach(function (input) {
    input.value = '';
  });
  // Uncheck all checkboxes and radio buttons
  var checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
  var radios = document.querySelectorAll('.radio');
  radios.forEach(function (radio) {
    radio.checked = false;
  });
  // Clear success message and error messages
  document.getElementById('success-message').innerText = '';
  var errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function (errorMessage) {
    errorMessage.innerText = '';
  });

}

function checkForm() {
  // Clear success message and error messages
  document.getElementById('success-message').innerText = '';
  var errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function (errorMessage) {
    errorMessage.innerText = '';
  });
  var allFieldsFilled = true;

  // Example validation - Check if each field has a value
  var inputs = document.querySelectorAll('.input-field');
  inputs.forEach(function (input) {
    if (input.value === '') {
      allFieldsFilled = false;
      showErrorMessage(input, 'Please fill out this field');
    }
  });

  // Check if at least one checkbox is checked
  var checkboxes = document.querySelectorAll('.checkbox');
  var checkboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
  if (!checkboxChecked) {
    allFieldsFilled = false;
    showErrorMessage(checkboxes[0], 'Please select at least one option');
  }

  // Check if at least one radio button is checked
  var radios = document.querySelectorAll('.radio');
  var radioChecked = Array.from(radios).some(radio => radio.checked);
  if (!radioChecked) {
    allFieldsFilled = false;
    showErrorMessage(radios[0], 'Please select an option');
  }

  // Check if all conditions are met
  if (allFieldsFilled) {
    showSuccessMessage('Success! Form is filled.');
  }
}

function showErrorMessage(element, message) {
  var errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.innerText = message;
  element.parentNode.appendChild(errorMessage);
}

function showSuccessMessage(message) {
  var successMessage = document.getElementById('success-message');
  successMessage.innerText = message;
}


