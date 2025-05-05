/*todo   Розробіть гру: Морський бій

  Розробіть 2 вимірний масив (10 на 10), та зробіть візуальну сітку (кораблі не повинні бути видимі).

  При 20 кліках на кубіки - гра повинна завершуватись поразкою, якщо до цього часу всі кораблики підбиті то гра виграна.

  Кораблі генерувати в рандомному порядку в масиві (не більше 10 кораблів)*/

const gameContainer = document.querySelector(".gameboard-container");
const startNewGame = document.querySelector("#start");
const outText = document.querySelector(".out");
const listSunkShip = document.querySelector(".list");
const counterHitsText = document.querySelector(".counter-hits");
const dialog = document.querySelector(".dialog");
const width = 10;
let falseHits = 0;
let goodHits = 0;

const arrayShips = [
  [2, 2],
  [3, 3, 3],
  [3, 3, 3],
  [4, 4, 4, 4],
  [5, 5, 5, 5, 5],
];

function createBoard() {
  for (let i = 0; i < width * width; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.id = i;
    gameContainer.append(block);
  }
}
createBoard();

const allBoardFields = document.querySelectorAll(".block");

//рандомна клітинка для корабля
//напралення горизонтальне або вертикальне

function addShip(ship) {
  let startIndex = Math.floor(Math.random() * 100);
  let randBool = Math.random() < 0.5;
  let isHorizontal = randBool;
  let shipFields = [];

  let validStart = validateStart(isHorizontal, startIndex, ship);

  for (let i = 0; i < ship.length; i++) {
    if (isHorizontal) {
      shipFields.push(allBoardFields[Number(validStart) + i]);
    } else {
      shipFields.push(allBoardFields[Number(validStart) + i * width]);
    }
  }

  let valid = validateSetsOfShips(isHorizontal, shipFields);

  let notTaken = shipFields.every((item) => !item.classList.contains("taken"));
  let countField = 0;
  if (valid && notTaken) {
    shipFields.forEach((shipField) => {
      shipField.classList.add("taken");
      countField++;
    });
    shipFields.forEach((shipField) =>
      shipField.classList.add(takeShipName(countField))
    );
  } else {
    addShip(ship);
  }
}

arrayShips.forEach((ship) => addShip(ship));

startNewGame.addEventListener("click", () => {
  location.reload();
});

//names for ships

function takeShipName(length) {
  let nameShip;
  switch (length) {
    case 2:
      nameShip = "destroyer";
      break;
    case 3:
      nameShip = "submarine";
      break;
    case 4:
      nameShip = "carrier";
      break;
    case 5:
      nameShip = "cruiser";
      break;
  }
  return nameShip;
}

//валідація, щоб корабель не виходив за рамки gameboard

function validateStart(isPosition, randomIndex, ship) {
  return isPosition
    ? randomIndex <= width * width - ship.length
      ? randomIndex
      : width * width - ship.length
    : randomIndex <= width * width - width * ship.length
    ? randomIndex
    : randomIndex - ship.length * width + width;
}

function validateSetsOfShips(isPosition, fields) {
  let valid;

  if (isPosition) {
    for (let i = 0; i < fields.length; i++) {
      valid = width - (fields[0].id % width) >= fields.length;
    }
  } else {
    fields.every((item, index) => {
      valid = fields[0].id < 90 + (width * index + 1);
    });
  }
  return valid;
}

//клас, якщо поле пусте  findEmpty
function findEmpty(field) {
  falseHits += 1;
  counterHitsText.innerText = "False Hits: " + falseHits;
  field.classList.add("fall-cell");
  field.removeEventListener("click", choiceField);
  outText.innerText = "It is not ship here. Find in other place!";
}

//хрестик, коли попадання getBoom
let playerHits = [];
let sunkShips = [];
function getBoom(field) {
  field.classList.add("boom");
  field.removeEventListener("click", choiceField);
  outText.innerText = "You hit the ship!";
  goodHits++;
  let classes = Array.from(field.classList);
  classes = classes.filter((className) => className !== "block");
  classes = classes.filter((className) => className !== "boom");
  classes = classes.filter((className) => className !== "taken");

  playerHits.push(...classes);

  checkSunkShips(playerHits, sunkShips);
}

function choiceField() {
  this.classList.contains("taken") ? getBoom(this) : findEmpty(this);
  //поставила 50 промахів, бо при 20 дуже мала ймовірність виграти
  if (falseHits > 50) {
    gameOver();
    dialog.classList.add("active");
    dialog.innerText = `Your hits ended. GO again!`;
  }
}

function checkSunkShips(arrHits, arrSunk) {
  function checkShip(shipName, shipLength) {
    if (arrHits.filter((el) => el === shipName).length === shipLength) {
      outText.innerText = `You sunk  ${shipName}!`;
      playerHits = arrHits.filter((el) => el !== shipName);
      arrSunk.push(shipName);
      listSunkShip.innerHTML += `${shipName.toUpperCase()}\n <br>`;
    }
  }
  checkShip("destroyer", 2);
  checkShip("submarine", 3);
  checkShip("carrier", 4);
  checkShip("cruiser", 5);

  checkWin(sunkShips, arrayShips);
}
function checkWin(sunkArr, shipsArr) {
  if (sunkArr.length === shipsArr.length) {
    gameOver();
    dialog.classList.add("active");
    dialog.innerText = `You WON! Your all hits:  ${
      goodHits + falseHits
    }, and ${goodHits} are success!`;
  }
}
function gameOver() {
  allBoardFields.forEach((field) => {
    field.removeEventListener("click", choiceField);
  });
  gameContainer.style.opacity = 0.5;
}

allBoardFields.forEach((field) => {
  field.addEventListener("click", choiceField);
});
