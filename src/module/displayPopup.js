import { createPopup, addComment } from './addPopupOne.js';

import { generateComment } from './allCommentsOne.js';
import { showDetails, addClosePopupEvent } from './addPopupTwo.js';

const displayPopup = async (id) => {
  const popupModal = document.querySelector('.popupContainer');
  const { body } = document;
  body.style.overflow = 'hidden';

  popupModal.innerHTML = '';

  try {
    const movieDetail = await showDetails(id);
    popupModal.append(createPopup(movieDetail));
    popupModal.style.display = 'flex';

    const commentLine = document.querySelector('.commentDisplay');
    const comments = await generateComment(id);
    commentLine.append(comments);

    addClosePopupEvent();
    addComment();
  } catch (error) {
    console.error('Display Popup error:', error);
  }
};

const addCommentPopupEvent = () => {
  const commentBtns = document.querySelectorAll('.comment');
  commentBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const commentId = btn.getAttribute('data-id');
      displayPopup(commentId);
    });
  });
};

export default addCommentPopupEvent;