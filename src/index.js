import './style.css';
import displayItems from './module/displayItems.js';
import { openPopup, closePopup } from './module/createPopup.js';




await displayItems();

const commentButtons = document.querySelectorAll('.comment');
const closeButton = document.querySelector('.close-btn');

commentButtons.forEach((commentButton) => {
    commentButton.addEventListener('click', openPopup);
  });

  closeButton.addEventListener('click', closePopup);
