const arrTicTac = Array(9).fill(0);
const field = document.querySelector("#ttt");
let step = 1;
const reloadBtn = document.querySelector("#reload");
let dialog = document.querySelector(".winner");

arrTicTac.forEach((el, index) => {
  let div = document.createElement("div");
  div.setAttribute("data-n", index);
  field.append(div);
});

function clickField(e) {
  let el = +e.target.getAttribute("data-n");

  if (arrTicTac[el] !== 0) return;

  arrTicTac[el] = step;

  addGameElement(el, e.target);

  checkWin(step);

  step = step === 1 ? 2 : 1;
}

function addGameElement(elementInd, currentEl) {
  switch (arrTicTac[elementInd]) {
    case 1:
      currentEl.innerText = "X";
      currentEl.style.color = "#7c5bf6";
      break;
    case 2:
      currentEl.textContent = "0";
      currentEl.style.color = "#ebee3a";
      break;
  }
}

function checkWin(step) {
  let winCombo = ["012", "345", "678", "036", "147", "258", "048", "246"];

  let indexStep = [];
  for (let i = 0; i < arrTicTac.length; i++) {
    if (arrTicTac[i] === step) {
      indexStep.push(i);
    }
  }
  for (let k = 0; k < winCombo.length; k++) {
    let count = 0;
    let winPattern = winCombo[k];

    winPattern.split("").forEach((item) => {
      if (indexStep.includes(+item)) {
        count++;
        if (count === 3) {
          showWin(step);
        }
      }
    });
  }
  if (!arrTicTac.includes(0)) showPat();
}

function showWin(step) {
  field.removeEventListener("click", clickField);
  field.style.opacity = 0.5;
  let winner = step === 1 ? "X" : "O";
  dialog.classList.add("active");
  dialog.innerText = `${winner} is winner!`;
}

function showPat() {
  field.removeEventListener("click", clickField);
  field.style.opacity = 0.5;
  dialog.classList.add("active");
  dialog.innerText = `Nobody won. Compete again!`;

  console.log(dialog.style.display);
}

reloadBtn.addEventListener("click", function () {
  location.reload();
});

field.addEventListener("click", clickField);
