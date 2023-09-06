import displayItems from './displayItems.js';

displayItems();

const commentButtons = document.querySelectorAll('.comment');

const popup = document.querySelector('.popupContainer');

document.addEventListener('DOMContentLoaded', () => {
  popup.innerHTML = `
    <button class="close-btn">X</button>
    <div class="subDivOne">
      <img class="movie-img" src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="Poster"></img>
      <h2 class="movieName">Under the dome</h2>
      <form action="" class="form"></form>
    </div>
    <div class="subDivTwo">
      <h2 class="commentHeading">Comments(<span class="allComments"></span>)</h2>
      <ul class="commentsDisplay"></ul>
      <div class="inputComments">
        <input required type="text" class="typeName" placeholder="Your Name"><br>
        <input required type="text" class="typeComment" placeholder="Your comment"><br>
        <button type="submit" class="submitComment" id="">Submit</button>
      </div>
    </div>
  `;
});

function openPopup() {
  popup.classList.add('.open-popup');
}

commentButtons.forEach((commentButton) => {
  commentButton.addEventListener('click', openPopup);
});
