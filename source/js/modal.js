var modalButton = document.querySelector(".weekly-good__button");
var modalForm = document.querySelector(".modal");
var modalAddToCard = document.querySelectorAll(".catalog-item__buy");
var overlay = document.querySelector(".overlay");

if (modalButton) {
  modalButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalForm.classList.add("modal--opened");
    overlay.classList.add("overlay--opened");
    });
  }

if (modalAddToCard) {
  for (var i = 0; i<modalAddToCard.length; i++) {
    modalAddToCard[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modalForm.classList.add("modal--opened");
      overlay.classList.add("overlay--opened");
    });
  }
  }

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalForm.classList.contains("modal--opened")) {
        modalForm.classList.remove("modal--opened");
      }
      if (overlay.classList.contains("overlay--opened")) {
        overlay.classList.remove("overlay--opened");
      }
    }
  });

  overlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (modalForm.classList.contains("modal--opened")) {
      modalForm.classList.remove("modal--opened");
    }
    if (overlay.classList.contains("overlay--opened")) {
      overlay.classList.remove("overlay--opened");
    }
  });
