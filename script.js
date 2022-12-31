const d = document;

d.addEventListener("DOMContentLoaded", () => {
  //card options

  const cardArray = [
    {
      name: "dog",
      img: "/Memory-Game/assets/dog.png",
    },
    {
      name: "cat",
      img: "/Memory-Game/assets/cat.png",
    },
    {
      name: "horse",
      img: "/Memory-Game/assets/horse.png",
    },
    {
      name: "parrot",
      img: "/Memory-Game/assets/parrot.png",
    },
    {
      name: "turtle",
      img: "/Memory-Game/assets/turtle.jpg",
    },
    {
      name: "hamster",
      img: "/Memory-Game/assets/bunny.png",
    },
    {
      name: "dog",
      img: "/Memory-Game/assets/dog.png",
    },
    {
      name: "cat",
      img: "/Memory-Game/assets/cat.png",
    },
    {
      name: "horse",
      img: "/Memory-Game/assets/horse.png",
    },
    {
      name: "parrot",
      img: "/Memory-Game/assets/parrot.png",
    },
    {
      name: "turtle",
      img: "/Memory-Game/assets/turtle.jpg",
    },
    {
      name: "hamster",
      img: "/Memory-Game/assets/bunny.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const $grid = d.querySelector(".grid"),
    $resultDisplay = d.querySelector("#result");
  let cardsChosen = [],
    cardsChosenId = [],
    cardsWon = [];

  //create the board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const $card = d.createElement("img");

      $card.setAttribute("src", "/Memory-Game/assets/blank.png");
      $card.setAttribute("data-id", i);
      $card.addEventListener("click", flipCard);

      $grid.appendChild($card);
    }
  }

  //check for matches
  function checkForMatch() {
    const $cards = d.querySelectorAll("img");

    const optionOneId = cardsChosenId[0],
      optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      $cards[optionOneId].setAttribute("src", "/Memory-Game/assets/blank.png");
      $cards[optionTwoId].setAttribute("src", "/Memory-Game/assets/blank.png");
      alert("You have clicked the same image");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");

      $cards[optionOneId].setAttribute("src", "/Memory-Game/assets/blank.png");
      $cards[optionTwoId].setAttribute("src", "/Memory-Game/assets/blank.png");

      $cards[optionOneId].removeEventListener("click", flipCard);
      $cards[optionTwoId].removeEventListener("click", flipCard);

      $cards[optionOneId].removeAttribute(
        "src",
        "/Memory-Game/assets/blank.png"
      );
      $cards[optionTwoId].removeAttribute(
        "src",
        "/Memory-Game/assets/blank.png"
      );

      cardsWon.push(cardsChosen);
    } else {
      $cards[optionOneId].setAttribute("src", "/Memory-Game/assets/blank.png");
      $cards[optionTwoId].setAttribute("src", "/Memory-Game/assets/blank.png");
      alert("Try Again please");
    }

    cardsChosen = [];
    cardsChosenId = [];
    $resultDisplay.textContent = cardsWon.length;
    $resultDisplay.style.color = "#01fe87";

    if (cardsWon.length === cardArray.length / 2) {
      alert("Congratulations, you won");
    }
  }

  //Flip the card
  function flipCard() {
    let cardId = this.getAttribute("data-id");

    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);

    this.setAttribute("src", cardArray[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
