import fetchDataFromAPI from './fetchData.js';

let popup;

const popupContent = document.createElement('div');
popupContent.setAttribute('class', 'popupContainer2');

export const openPopup = async (id) => {
  popup = document.querySelector('.popupContainer');

  const backgroundElements = document.querySelectorAll('body > *:not(.popupContainer)');
  backgroundElements.forEach((element) => {
    element.classList.add('blur-background');
  });

  const movieData = await fetchDataFromAPI();

  const movie = movieData.find((values) => values.id === id);

  popupContent.innerHTML = `
    <div class="subDivOne">
      <img class="movie-img" src="${movie.image.medium}" alt="Poster"></img>
      <h2 class="movieName">${movie.name}</h2>
      <form action="" class="form"></form>
    </div>
    <div class="subDivTwo">
      <h2 class="commentHeading">Comments(<span class="allComments"></span>)</h2>
      <ul class="commentsDisplay"></ul>
      <div class="inputComments">
        <input required type="text" class="typeName" id="typeName" placeholder="Your Name"><br>
        <input required type="text" class="typeComment" id="typeComment" placeholder="Your comment"><br>
        <button type="submit" class="submitComment" id="">Submit</button>
      </div>
    </div>
  `;

  popup.appendChild(popupContent);

  popup.style.display = 'block';
};

export const closePopup = async () => {
  popup.style.display = 'none';

  const backgroundElements = document.querySelectorAll('body > *:not(.popupContainer)');
  backgroundElements.forEach((element) => {
    element.classList.remove('blur-background');
  });
};
