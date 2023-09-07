import './style.css';
import displayItems from './module/displayItems.js';
import { openPopup, closePopup } from './module/createPopup.js';
import './module/fetchComments.js';

await displayItems();

const commentButtons = document.querySelectorAll('.comment');
const closeButton = document.querySelector('.close-btn');

commentButtons.forEach((commentButton, index) => {
  commentButton.addEventListener('click', () => openPopup(index + 1));
});

closeButton.addEventListener('click', closePopup);
