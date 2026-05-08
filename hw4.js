/*
Name: Salma Abuzaher
Date Created: 02/26/2026
Date Modified: 05/07/2026
Purpose: JS for Homework 4 Patient Registration Form
*/

//dynamic date code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider code
let slider = document.getElementById("range");
let output = document.getElementById("range_slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

//validating first name
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty"
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}

//validating middle name
function validateMname() {
    let mname = document.getElementById("mname").value;
    if (mname === "") {
    document.getElementById("mname-error").innerHTML = "";
    return true;
}
    const namePattern = /^[A-Z]$/;
    mname = mname.toUpperCase();
    document.getElementById("mname").value = mname;
    if (!mname.match(namePattern)) {
        document.getElementById("mname-error").innerHTML = "Middle initial must be a single uppercase letter.";
        return false;
    } else {
        document.getElementById("mname-error").innerHTML = "";
        return true;
    }
}

//validating last name
function validateLname() {
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty"
        return false;
    } else if (lname != "") {
        if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    } else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}
}

//validating DOB
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

//validating SSN
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

function formatSsn() {
    let ssn = document.getElementById("ssn").value.replace(/\D/g, ""); // strip non-digits
    if (ssn.length > 3 && ssn.length <= 5) {
        ssn = ssn.slice(0,3) + "-" + ssn.slice(3);
    } else if (ssn.length > 5) {
        ssn = ssn.slice(0,3) + "-" + ssn.slice(3,5) + "-" + ssn.slice(5,9);
    }
    document.getElementById("ssn").value = ssn;
}

//validating zip
function validateZipcode() {
    const zipInput = document.getElementById("zipcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zipcode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zipcode-error").innerHTML = "";
    return true;
}

//validating address
function validateAddress1() {
  var ad1 = document.getElementById("address1").value;
  console.log(ad1);
  console.log(ad1.length);

  if (ad1.length < 2) {
    document.getElementById("address1-error").innerHTML =
    "Please enter your address on address line";
    return false;
  } else {
    document.getElementById("address1-error").innerHTML = "";
    return true;
  }
}

//validate address line 2
function validateAddress2() {
    const ad2 = document.getElementById("address2").value;
    if (ad2 === "") return true; // optional field, blank is ok

    if (ad2.length < 2 || ad2.length > 30) {
        document.getElementById("address2-error").innerHTML =
        "Address line 2 must be between 2 and 30 characters.";
        return false;
    } else {
        document.getElementById("address2-error").innerHTML = "";
        return true;
    }
}

//validating city
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

//validating email
function validateEmail() {
  email = document.getElementById("email").value;
  var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regular expression pattern for email

  if (email == "") {
    document.getElementById("email-error").innerHTML =
    "Email Address cannot be empty";
    return false;
  } else if (!email.match(emailR)) {
    document.getElementById("email-error").innerHTML =
    "Please enter a valid Email Address";
    return false;
  } else {
    document.getElementById("email-error").innerHTML = "";
    return true;
  }
}

//validating phone number
function validatePhonenum() {
  const phoneInput = document.getElementById("phonenum");
  const phone = phoneInput.value.replace(/\D/g,""); //removes non-number characters

  if (phone.length !=10) {
    document.getElementById("phonenum-error").innerHTML =
    "Phone Number cannot be left blank";
    return false;
  }

  const formattedPhone =
  phone.slice(0,3) +"-"+ phone.slice(3,6) +"-"+ phone.slice(6,10)
  phoneInput.value = formattedPhone;
  document.getElementById("phonenum-error").innerHTML = "";
  return true;
}

//validating username
function validateUsername() {
  username = document.getElementById("username").value;

  //converts username to lowercase
  username = username.toLowerCase();
  document.getElementById("username").value = username;

  if (username.length === 0) {
    document.getElementById("username-error").innerHTML =
    "Username field cannot be empty";
    return false;
  }

  //checks that username doesn't start with a number
  if (!isNaN(username.charAt(0))){
    document.getElementById("username-error").innerHTML =
    "Username cannot begin with a number";
    return false;
  }

  //checks if username consists of only letters, numbers, or underscores
  let regex = /^[a-zA-Z0-9_-]+$/;
  if (!regex.test(username)) {
    document.getElementById("username-error").innerHTML =
    "Username can only contain letters, numbers, or underscores";
    return false;

  } else if (username.length < 5) {
    document.getElementById("username-error").innerHTML =
    "Username cannot be less than 5 characters";
    return false;
  } else if (username.length > 20) {
    document.getElementById("username-error").innerHTML =
    "Username cannot exceed 20 characters";
    return false;
  } else {
    document.getElementById("username-error").innerHTML = "";
    return true;
  }
}

//validating password
function validatePassword() {
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  //sets up and initializes array
  const errorMessage = [];

  //checks for lowercase letters
  if (!password.match(/[a-z]/)) {
    errorMessage.push("Enter at least one lowercase letter");
  }
  //checks for uppercase letters
  if (!password.match(/[A-Z]/)) {
    errorMessage.push("Enter at least one uppercase letter");
  }
  //checks for numbers
  if (!password.match(/[0-9]/)) {
    errorMessage.push("Enter at least one number");
  }
  //checks for special characters
  if (!password.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
    errorMessage.push("Enter at least one special character");
  }
  //checks for username not in password
  if (password == username || password.includes(username)) {
    errorMessage.push("Password cannot contain username");
  }
  //displays error message if theres errors
  const errorContainer = document.querySelector(".pass-message");
  errorContainer.innerHTML = errorMessage
  .map(msg => `<span>${msg}</span><br>`)
  .join("");

  return errorMessage.length === 0;
}

//validating confirm password
function confirmPassword() {
  password1 = document.getElementById("password").value;
  password2 = document.getElementById("confirm").value;

  if (password1 !== password2) {
    document.getElementById("password2-error").innerHTML =
    "Passwords do not match";
    return false;
  } else {
    document.getElementById("password2-error").innerHTML =
    "Passwords match";
    return true;
  }
}

//review button 
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='2'>Review Your Information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;
        var value = el.value;

        // skip elements with no name
        if (!name) continue;

        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;

            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "range":
                // Only show the slider if the user moved it off the default (0)
                if (value !== "0") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":
                // skip
                break;

            default:
                if (value !== "") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//remove user input
function removeReview() {
  document.getElementById("showInput").innerHTML = "";
}

//show alert box when needed
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

//validate everything on form
function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMname()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateAddress2()) {
    valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZipcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhonenum()) {
        valid = false;
    }
    if (!validateUsername()) {
        valid = false;
    }
    if (!validatePassword()) {
        valid = false;
    }
    if (!confirmPassword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }

//when the cookies expire
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

//retrieves value of cookie by its name
function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
  {id:"fname", cookieName: "firstName"},
  {id:"mname"},
  {id:"lname"},
  {id:"dob"},
  {id:"address1"},
  {id:"address2"},
  {id:"city"},
  {id:"zipcode"},
  {id:"email"},
  {id:"phonenum"},
  {id:"username"},
];

// Save fields to localStorage as user leaves each field (except fname which uses cookie)
inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);
    if (!inputElement) return;

    // Prefill from localStorage (or cookie for fname)
    if (input.cookieName === "firstName") {
        var cookieValue = getCookie("firstName");
        if (cookieValue !== "") inputElement.value = cookieValue;
    } else {
        var saved = localStorage.getItem(input.id);
        if (saved) inputElement.value = saved;
    }

    // Save to localStorage on blur (cookie for fname only)
    inputElement.addEventListener("blur", function () {
        if (input.cookieName === "firstName") {
            setCookie("firstName", inputElement.value, 2); // 48 hours
        } else {
            localStorage.setItem(input.id, inputElement.value);
        }
    });
});

// Greet the user
var firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start as a new user.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        // Clear cookie and localStorage
        setCookie("firstName", "", -1);
        localStorage.clear();
        location.reload();
    });
} else {
    document.getElementById("welcome1").innerHTML = "Welcome, New User!";
}

// Remember Me checkbox
document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        // Uncheck = delete cookie and localStorage
        setCookie("firstName", "", -1);
        localStorage.clear();
        console.log("Cookie and localStorage cleared because Remember Me is unchecked.");
    } else {
        // Recheck = save everything back
        var fname = document.getElementById("fname").value.trim();
        if (fname !== "") setCookie("firstName", fname, 2);

        inputs.forEach(function (input) {
            if (input.cookieName === "firstName") return; // already handled above
            var el = document.getElementById(input.id);
            if (el && el.value.trim() !== "") {
                localStorage.setItem(input.id, el.value);
            }
        });
        console.log("Cookie and localStorage saved because Remember Me is checked.");
    }
});

// On page load, delete cookie and localStorage if Remember Me is unchecked
document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;
    if (!rememberMe) {
        setCookie("firstName", "", -1);
        localStorage.clear();
    }
});
