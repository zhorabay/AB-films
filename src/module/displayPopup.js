import { createPopup, createNewCmnt } from './addPopupOne.js';

import { createCmnt } from './allCommentsOne.js';
import { detailsAll, popupCloseBtn } from './addPopupTwo.js';

const popShow = async (id) => {
  const allpopup = document.querySelector('.popupContainer');
  const { body } = document;
  body.style.overflow = 'hidden';

  allpopup.innerHTML = '';

  try {
    const movieDetail = await detailsAll(id);
    allpopup.append(createPopup(movieDetail));
    allpopup.style.display = 'flex';

    const commentLine = document.querySelector('.commentDisplay');
    const comments = await createCmnt(id);
    commentLine.append(comments);

    popupCloseBtn();
    createNewCmnt();
  } catch (error) {
    console.error('Display Popup error:', error);
  }
};

const openPopup = () => {
  const commentBtns = document.querySelectorAll('.comment');
  commentBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const commentId = btn.getAttribute('data-id');
      popShow(commentId);
    });
  });
};

export default openPopup;