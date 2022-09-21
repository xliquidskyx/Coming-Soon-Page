var errorMessage = document.querySelector('.error-message')
var inputForm = document.querySelector(".email-input");
var errorIcon = document.querySelector('.error-icon')
var checked = false;
var inputText;

function validateEmail() {

    if (checked == true) {
        errorMessage.textContent = "";
        $(inputForm).css({
            "border": "1px solid hsl(0, 93%, 68%)",
            "color": "hsl(0, 93%, 68%)"
        });
        $(errorIcon).css({
            "display": "none"
        })
    }

    inputText = inputForm.value;    

    if (inputText == "") {
        errorMessage.textContent ="Please provide a valid email";
        changeInputStyle();
    } else if (!inputText.includes("@")) {
        errorMessage.textContent ="Please provide a valid email";
        changeInputStyle();
    } else {
        alert("Congratulations! You have successfully signed up to our newsletter.");
        inputForm.value = "Email Address";
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