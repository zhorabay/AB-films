import './style.css';
import displayItems from './module/displayItems.js';
import './module/addPopupOne.js';
import './module/allCommentsOne.js';
import './module/commentsCounter.js';
import openPopup from './module/displayPopup.js';

await displayItems();

openPopup();