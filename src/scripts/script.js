function validateForm() {
    let b = document.querySelector("#fname").textContent === "";
    if (b) {
        let v = document.querySelector("div:nth-of-type(1)");
        v.setAttribute("display", "block");
    }
}