const returnFirstScreen = document.getElementById("returnFirstScreen");
const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const secondScreen = document.querySelector(".secondScreen");
const firstScreen = document.querySelector(".firstScreen");
const spanError = document.getElementById("spanError");
const input = document.querySelector("input");
const form = document.querySelector("form");

secondScreen.style.display = "none";
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!input.value) {
        spanError.style.display = "block";
        input.classList.add("invalid");
        spanError.textContent = "A input cannot be empty, please.";
    }else if (input.value && !validEmail.test(input.value)) {
        spanError.style.display = "block";
        input.classList.add("invalid");
        spanError.textContent = "Valid email required";
    }else{
        input.value = "";
        spanError.textContent = "";
        input.classList.remove("invalid");
        firstScreen.style.display = "none";
        secondScreen.style.display = "block";
    }
});
returnFirstScreen.addEventListener("click", () => {
    firstScreen.style.display = "flex";
    secondScreen.style.display = "none";
});