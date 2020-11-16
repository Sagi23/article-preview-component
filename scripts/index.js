const shareBtn = document.querySelector(".share-icon");
const avatar = document.querySelector(".avatar");
const name = document.querySelector(".name");
const date = document.querySelector(".date");
const shareDiv = document.querySelector(".share");
const shareText = document.querySelector(".share-text");
const icons = document.querySelectorAll(".icon");

shareBtn.addEventListener("click", function () {
  avatar.classList.toggle("hide");
  name.classList.toggle("hide");
  date.classList.toggle("hide");
  shareDiv.classList.toggle("active");
  shareBtn.classList.toggle("share-icon-active");
  icons.forEach((icon) => {
    icon.classList.toggle("hide");
  });
  shareText.classList.toggle("hide");
});
