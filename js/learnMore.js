let links = Array.from(document.querySelectorAll(".link"));
let boxes = Array.from(document.querySelectorAll(".whatWeDo-card__text"));
let cards = Array.from(document.querySelectorAll(".whatWeDo__card"));
let card5 = document.querySelector(".card-5 .whatWeDo-card__bg-img");
let drop_links = Array.from(document.querySelectorAll(".dropdown-link"));
let menu_links = Array.from(document.querySelectorAll(".navbar-content-services-link"));
let menu_about_link = Array.from(document.querySelector(".navbar-content-link"));


links.forEach(function (link, index) {
  link.onclick = function () {
    let box = boxes[index];
    let card = cards[index];

    if (box.classList.contains("open")) {
      box.classList.remove("open");
    } else {
      boxes.forEach(function (box) {
        box.classList.remove("open");
      });

      cards.forEach(function (card) {
        card.classList.remove("card__open");
      });
      box.classList.add("open");
      card.classList.toggle("card__open");
    }

    if (index === 4) {
      box.classList.toggle("card5-text-open");
    }
  };
});

drop_links.forEach(function (link, index) {
  link.onclick = function () {
    boxes.forEach(function (box) {
      box.classList.remove("open");
    });

    cards.forEach(function (card) {
      card.classList.remove("card__open");
    });
    let cardIndex = index;

    if (cardIndex >= 0 && cardIndex < cards.length) {
      let box = boxes[cardIndex];
      let card = cards[cardIndex];
      box.classList.toggle("open");
      card.classList.toggle("card__open");
    }
  };
});

menu_links.forEach(function (link) {
  link.onclick = function () {
    let sideMenuCheckbox = document.getElementById("side-menu");
    sideMenuCheckbox.checked = false;
  };
});
