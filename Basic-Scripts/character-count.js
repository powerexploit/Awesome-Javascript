const wordForm = document.querySelector("#word-form");
const letterList = document.querySelector("#letter-list")
let wordInput = document.querySelector("#word-input").value

wordForm.addEventListener("submit", function () {
    event.preventDefault();
    let wordInput = document.querySelector("#word-input").value
    const obj = {};
    for (let i = 0; i < wordInput.length; i++) {
        const char = wordInput[i];
        if (!obj[char]) {
            obj[char] = 0;
        }
        obj[char]++;
    }
    while (letterList.hasChildNodes()) {
        letterList.removeChild(letterList.lastChild);
    }
    for (let [key, value] of Object.entries(obj)) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${key}: ${value}`));
        letterList.appendChild(li);
    }

});












