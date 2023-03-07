// Content, which will appear upon successful registration)
$('#sign-up__registered').hide();

// Animation of appearance of form elements
$(document).ready(function() {
  // Get all form elements inside the form
  let formElements = $('form').find('label, input, select, textarea');
  // Set the initial opacity of each form element to 0
  formElements.css('opacity', 0);
  // Use the each() function to iterate over the form elements
  formElements.each(function(index) {
    let element = $(this);
    // Use the delay() function to add a delay before each animation
    element.delay(index * 200).animate({
      opacity: 1,
      top: 0
    }, 500);
  });
});

// Validation of email input
function validateEmail() {
  let emailField = document.getElementById("email");
  let email = emailField.value;
  
  if (!isValidEmail(email)) {
    emailField.classList.add("invalid");
    return false;
  } else {
    emailField.classList.remove("invalid");
  }
}
function isValidEmail(email) {
  if (email.indexOf("@") < 0) {
    return false;
  }

  if (email.indexOf(".") < 0) {
    return false;
  }

  if (email.length === 0) {
    return false;
  }

  return true;
}



// Validation of password input
function validatePassword() {
  let passwordField = document.getElementById("password");
  let password = passwordField.value;

  if (!isValidPassword(password)) {
    passwordField.classList.add("invalid");
    passwordField.nextElementSibling.classList.add("invalid");
    return false;
  } else {
    passwordField.classList.remove("invalid");
    passwordField.nextElementSibling.classList.remove("invalid");
    return true;
  }
}
function isValidPassword(password) {
  // Password must be at least 8 characters long
  if (password.length < 8 && password.length === 0) {
    return false;
  }
  // Password must contain at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  // Password must contain at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }
  // Password must contain at least one number
  if (!/\d/.test(password)) {
    return false;
  }
  // Password meets all requirements
  return true;
}



// Validation of confirm password input
function validateConfirmPassword() {
  let confirmPasswordField = document.getElementById("confirm-password");
  let confirmPassword = confirmPasswordField.value;
  let passwordField = document.getElementById("password");
  let password = passwordField.value;

  if (confirmPassword !== password) {
    confirmPasswordField.classList.add("invalid");
    return false;
  } else {
    confirmPasswordField.classList.remove("invalid");
    return true;
  }
}

// Main validation for form
function validateForm() {
  const firstName = $('#first-name');
  const lastName = $('#last-name');
  const nationality = $('#nationality');
  const gender = $('input[name=gender]:checked');

  if (firstName.val() === '') {
    firstName.addClass("invalid");
    return false;
  } else {
    firstName.removeClass("invalid");
  }

  if (lastName.val() === '') {
    lastName.addClass("invalid");
    return false;
  } else {
    lastName.removeClass("invalid");
  }

  if (nationality.val() === '') {
    nationality.addClass("invalid");
    return false;
  } else {
    nationality.removeClass("invalid");
  }

  validateEmail();

  if (nationality.val() === '') {
    nationality.addClass("invalid");
    return false;
  } else {
    nationality.removeClass("invalid");
  }

  let genders = $('input[name=gender]');
  if (gender.val() === undefined) {
    genders.addClass("invalid");
    genders.next().addClass("invalid");
    return false;
  } else {
    genders.removeClass("invalid");
    genders.next().removeClass("invalid");
  }

  let validPassword = validatePassword();
  let validConfirmPassword = validateConfirmPassword();

  if (!validPassword || !validConfirmPassword) {
    return false;
  } else {
    return true;
  }
}

function submitForm(event) {
  let valid = validateForm();

  let firstName = $('#first-name').val();
  let lastName = $('#last-name').val();
  let nationality = $('#nationality').val();
  let email = $('#email').val();
  let dateOfBirth = [$('#day').val(), $('#month').val(), $('#year').val()];
  let gender = $('input[name=gender]:checked').val();
  let password = $('#password').val();
  let confirmPassword = $('#confirm-password').val();

  formData =  {
    firstName: firstName,
    lastName: lastName,
    nationality: nationality,
    email: email,
    dateOfBirth: dateOfBirth,
    gender: gender,
    password: password
  };

  if (valid) {
    $.ajax({
      url: '../server-ok.json',
      type: 'GET',
      data: formData,
      dataType: 'json',
      success: function(data) {
        $('#first-name').val('');
        $('#last-name').val('');
        $('#nationality').val('');
        $('#email').val('');
        $('input[name=gender]').removeAttr('checked');
        $('#password').val('');
        $('#confirm-password').val('');

        // Fade out the first element over 1 second
        $('#sign-up__content').fadeOut(1000, function() {
          // When the fade out animation is complete, fade in the second element over 1 second
          $('#sign-up__registered').fadeIn(1000);
        });
      },
      error: function() {
        alert('Server error');
      }
    });
  } else {
    $('#submitButton').addClass('shake');
    // Remove the 'shake' class after the animation has ended
    $('#submitButton').on('animationend', function() {
      $(this).removeClass('shake');
    });
  }
}