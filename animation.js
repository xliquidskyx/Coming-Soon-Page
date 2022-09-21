var errorMessage = document.querySelector('.error-message')
var inputForm = document.querySelector(".email-input");

function validateEmail() {
    var inputText = inputForm.value;    
    if (inputText == "") {
        errorMessage.textContent ="Please provide a valid email";
        changeInputStyle();
    } else if (!inputText.includes("@")) {
        errorMessage.textContent ="Please provide a valid email";
        changeInputStyle();
    }
}

function changeInputStyle() {
    $(inputForm).css({
        "border": "2px solid hsl(0, 93%, 68%)",
        "color": "hsl(0, 93%, 68%)"
    }),
    $(inputForm).children('.error-icon').css({
        "display": "inline-block"
    })
}