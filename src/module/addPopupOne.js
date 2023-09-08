import {
  renderComment,
  generateComment,
} from './allCommentsOne.js';
import countCom from './commentsCounter.js';

export const createPopup = (details) => {
  const popupContent = document.createElement('div');
  popupContent.setAttribute('class', 'popupContainer2');
  popupContent.innerHTML = `
  
  <div class="wholePopup">

  <button class="close-btn">X</button>

      <div class="subDivOne">
          <img class="movie-img" src="${details.image.medium}" alt="Poster"></img>
          <h2 class="movieName">${details.name}</h2>
          <form action="" class="form"></form>
      </div>

      <div class="subDivTwo">

          <div class="description">
              <p id="sumTxt">Description:</p> ${details.summary}
          </div>
          <div class="smallItems"><span class="generes">Genre: </span> ${details.genres}</div>

          <div class="smallItems"><span class="titles">OfficialSite: </span> <a href="${details.officialSite}"
                  target="_blank">OfficialSite</a>
          </div>

          <div class="smallItems"><span class="titles">ID: </span> ${details.id}</div>
          <div class="smallItems"><span class="titles">IMDb Rating: </span> ${details.rating.average}</div>

      </div>

      <div class="comment-container">

          <p class="comments">Comments(<span class="commentsCount"></span>)</p>

          <form class="inputComment">
              <input required type="text" class="typeName" id="typeName" placeholder="Your Name"><br>
              <input required type="text" class="typeComment" id="typeComment" placeholder="Your comment"><br>
              <button type="submit" class="submitComment" id="${details.id}">Submit</button>
          </form>

          <div class="commentDisplay">
          </div>

      </div>

      <div class="forStyling
      "></div>

  </div>

  `;

  return popupContent;
};

export const addComment = async () => {
  const counter = countCom();
  const commentForm = document.querySelector('.inputComment');
  const formSubmitBtn = document.querySelector('.submitComment');
  const commentSection = document.querySelector('.commentDisplay');
  document.querySelector('.commentsCount').innerHTML = counter;
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = commentForm.elements[0];
    const cDate = new Date();

    const formattedDate = cDate.toISOString().split('T')[0];

    const comment = commentForm.elements[1];
    if (!(name === '' || comment === '')) {
      await renderComment(formSubmitBtn.id, name.value, formattedDate, comment.value);
      const commentslist = await generateComment(formSubmitBtn.id);
      commentSection.innerHTML = '';
      commentSection.append(commentslist);
      const counter = countCom();
      document.querySelector('.commentsCount').innerHTML = counter;
      commentForm.reset();
    }
  });
};