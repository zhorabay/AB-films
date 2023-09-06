import './style.css';
import displayItems from './module/displayItems.js';
import displayPopup from './module/createPopup.js';

displayItems();

const popup = document.querySelector('.popupContainer');

popup.addEventListener('click', displayPopup);