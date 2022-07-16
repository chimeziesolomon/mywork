const TOTALE = document.getElementById("totale-number");
const BUTTONS = document.querySelectorAll("button");
BUTTONS.forEach((BTN) => {
    const LETTER = BTN.innerHTML;
    BTN.addEventListener("click", (e) => {
        if (e.target.className === "num") {
            TOTALE.innerHTML = LETTER;
        }
    });
});
const CE = document.getElementById("number-calc6");
CE.addEventListener("click", () => {
    TOTALE.innerHTML = 0;
});