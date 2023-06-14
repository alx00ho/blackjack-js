let cards = [];

let sum = 0;

let isAlive = true;
let hasBlackjack = false;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "Per",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  clear();
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out!";
    isAlive = false;
  }

  messageEl.textContent = message;
  cardsEl.textContent = `Cards: ${cards[0]}`;
  for (let i = 1; i < cards.length; i++) {
    cardsEl.textContent += `, ${cards[i]}`;
  }
  sumEl.textContent = `Sum: ${sum}`;
}

function drawCard() {
  if (isAlive && !hasBlackjack) {
    let newCard = getRandomCard();
    cards.push(newCard);
    sum += newCard;

    renderGame();
  }
}

function getRandomCard() {
  let rand = Math.floor(Math.random() * 10 + 2);
  if (rand === 1) {
    return 11;
  } else if (rand >= 11) {
    return 10;
  } else {
    return rand;
  }
}

function clear() {
  messageEl.textContent = "Want to play?";
  cardsEl.textContent = "Cards: ";
  sumEl.textContent = "Sum: ";
}
