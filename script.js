let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

console.log("countEl: ");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

function reset() {
    saveEl.textContent = "Previous Entries: ";
    countEl.textContent = 0;
    count = 0;
}