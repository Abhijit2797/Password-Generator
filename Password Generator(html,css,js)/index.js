var password = document.getElementById("password");

function genPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
    let passwordLength = 7;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    //Display on input field
    document.getElementById("password").value = password;
}

//Copy Button
function copyPassword(){

    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand("copy")
}

