
const form = document.querySelector("form");



// Makes sure correct format of email was inputed
const patterns = /^([a-z\d-?].+)@([a-z\d-?].+)\.([a-z]{3,5})(\.[a-z]{2,5})?$/;


// Email Validator
function validate(regex, field) {
    if (!regex.test(field.value)) {
        console.log("Pls put in a valid email.");
        document.querySelector('i').innerHTML = "error";
        document.querySelector("small").classList.remove("hide")
        return;
    }

    document.querySelector("small").classList.add("hide")
    document.querySelector('i').innerHTML = "";
    console.log("right");

}


function validateEmail(e) {
    e.preventDefault();
    console.log(this.email.value);

    validate(patterns, this.email);
    this.reset();
}




form.addEventListener("submit", validateEmail)