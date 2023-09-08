import './style.css';
import displayItems from './module/displayItems.js';
import './module/addPopupOne.js';
import './module/allCommentsOne.js';
import './module/commentsCounter.js';
import addCommentPopupEvent from './module/displayPopup.js';

await displayItems();

addCommentPopupEvent();