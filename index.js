const cards = document.querySelectorAll(".card");

//variables
var isFlipped = false;
var firstCard;
var secondCard;


const reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

const fail = () => {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

const success = () => {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

const checkIt = () => {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

const flip = (ev) => {
  //   console.log("Card flipped");
  ev.currentTarget.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = ev.currentTarget;
  } else {
    secondCard = ev.currentTarget;
    checkIt();
  }
}

Array.from(cards).map(card => card.addEventListener("click", flip.bind(event)));


//TODO: shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
