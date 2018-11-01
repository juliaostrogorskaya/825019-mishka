var modalButton = document.querySelector(".weekly-good__button");
var modalForm = document.querySelector(".modal");
var modalAddToCard = document.querySelector(".catalog-item__buy");

modalButton.addEventListener("click", function() {
  if (modalForm.classList.contains("modal--closed")) {
      modalForm.classList.remove("modal--closed");
      modalForm.classList.add("modal--opened");
    }
  });

  modalAddToCard.addEventListener("click", function() {
    if (modalForm.classList.contains("modal--closed")) {
        modalForm.classList.remove("modal--closed");
        modalForm.classList.add("modal--opened");
      }
    });
