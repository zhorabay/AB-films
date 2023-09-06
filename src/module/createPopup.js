export default function displayPopup(){
const commentButtons = document.querySelectorAll('.comment');

const popup = document.querySelector('.popupContainer');

function openPopup() {
  popup.style.display = '';
}

openPopup();

commentButtons.forEach((commentButton) => {
  commentButton.addEventListener('click', openPopup);
});
}