var errorMessage = document.querySelector('.error-message')
var inputForm = document.querySelector(".email-input");
var errorIcon = document.querySelector('.error-icon')
var checked = false;
var inputText;

function validateEmail() {

    if (checked == true) {
        errorMessage.textContent = "";
        $(inputForm).css({
            "border": "1px solid hsl(0, 36%, 70%)",
            "color": "hsl(0, 36%, 70%)"
        });
        $(errorIcon).css({
            "display": "none"
        })
    }

    inputText = inputForm.value;    

    if (inputText == "") { //check if the input is empty
        errorMessage.textContent ="Please provide a valid email";
        changeInputStyle();
        return;
    } else if (!inputText.includes("@")) { //check if it includes @
        errorMessage.textContent ="Please provide a valid email";
        changeInputStyle();
        return;
    } 

    const splitEmail = inputText.split("@");

    if (splitEmail[0] == "" || splitEmail[0].length < 2|| splitEmail[1] == "" || splitEmail[1].length < 5) {
        errorMessage.textContent = "Please provide a valid email"; //check if it has characters before and after @ character
        changeInputStyle();
    } else if(!splitEmail[1].includes(".") || splitEmail[1].slice(-1) == ".") {
        errorMessage.textContent = "Please provide a valid email"; //check if 2nd part of the str has . and its not the last element
        changeInputStyle();
    } else {
        alert("Congratulations! You have successfully signed up to our newsletter.");
        inputForm.value = ""; //clears input text
        inputForm.placeholder = "Email Address"; //changes the placeholder
    }
}

function changeInputStyle() {
    checked = true;
    $(inputForm).css({
        "border": "2px solid hsl(0, 93%, 68%)",
        "color": "hsl(0, 93%, 68%)"
    });
    $(errorIcon).css({
        "display": "inline-block"
    })
}