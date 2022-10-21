const cards = document.querySelectorAll(".memory__card");

let hasFlippedCard = false;
let lockedBoard = false;
let firstCard, secondCard;

const flipCard = (e) => {
  if (lockedBoard) return;

  //Add class to clicked card
  const target = e.target.parentElement;

  if (target === firstCard) return;

  target.classList.add("flip");

  //console.log(target.dataset.icons);

  if (!hasFlippedCard) {
    //first click

    hasFlippedCard = true;
    firstCard = target;
  } else {
    //second click
    hasFlippedCard = false;
    secondCard = target;

    checkForMatch();
  }
};

const checkForMatch = () => {
  const isEqual = firstCard.dataset.icons === secondCard.dataset.icons;
  isEqual ? disableCards() : unFlipCards();
};

const disableCards = () => {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
};
const unFlipCards = () => {
  lockedBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1000);
};
const resetBoard = () => {
  //Heavy
  // [hasFlippedCard, lockedBoard] = [false, false];
  // [firstCard, secondCard] = [null, null];
  //Better
  hasFlippedCard = lockedBoard = false;
  firstCard = secondCard = null;
};

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
  const randomIndex = Math.floor(Math.random() * cards.length);
  card.style.order = randomIndex;
});

let btnGame = document.querySelector(".new__game");

const reloadGame = () => {
  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
    card.classList.remove("flip");
    const randomIndex = Math.floor(Math.random() * cards.length);
    card.style.order = randomIndex;
  });

  const audio = document.querySelector("audio");
  audio.currentTime = 0;
  audio.play();
};

btnGame.addEventListener("click", reloadGame);
//greendoc, anim.js. three.js, pluty
