
const textarea = document.getElementById("messageBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const maxChars = 100;


function updateCounter() {
    const used = textarea.value.length;
    const remaining = maxChars - used;

    counter.textContent = `${remaining} characters left`;

   
    if (remaining <= 0) {
        counter.style.background = "red";
        counter.style.color = "white";
    } else if (remaining <= 20) {
        counter.style.background = "yellow";
        counter.style.color = "black";
    } else {
        counter.style.background = "none";
        counter.style.color = "black";
    }
}

textarea.addEventListener("keydown", function (e) {
    if (textarea.value.length >= maxChars && e.key !== "Backspace") {
        e.preventDefault();
    }
});


textarea.addEventListener("input", updateCounter);


resetBtn.addEventListener("click", () => {
    textarea.value = "";
    updateCounter();
});


updateCounter();
