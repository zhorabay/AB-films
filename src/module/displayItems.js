import fetchDataFromAPI from './fetchData.js';
import fetchLikes from './displayLikes.js';
import renderLike from './renderLike.js';
import itemsCounter from './itemsCounter.js';

const displayItems = async () => {
  const [likesData, baseData] = await Promise.all([fetchLikes(), fetchDataFromAPI()]);
  const combinedData = baseData.map((show) => {
    const likes = likesData.find((like) => like.item_id == show.id);
    return {
      ...show,
      likes: likes ? likes.likes : 0,
    };
  });
  let items = '';
  combinedData.forEach((values, index) => {
    items += `
          <div class="films">
              <div class="film-image">
                  <img src="${values.image.medium}" alt="film image"/>
              </div>
              <div class="title">
                  <div class="film-name">
                  ${values.name}
                  </div>
                  <div class="like">
                      <i id="heart-icon-${index}" class="fa-solid fa-heart"></i>
                      <p id="like-count-${values.id}">${values.likes}</p>
                      <p class="likes">likes</p>
                  </div>
                  <button class="comment">Comments</button>
              </div>
          </div>`;
  });
  document.querySelector('.display').innerHTML = items;
  document.querySelector('#amount').innerHTML = itemsCounter();

  combinedData.forEach((values, index) => {
    const heartIcon = document.getElementById(`heart-icon-${index}`);
    heartIcon.addEventListener('click', (e) => {
      e.preventDefault();
      renderLike(values.id.toString());
      heartIcon.classList.add('liked');
      setTimeout(() => {
        heartIcon.classList.remove('liked');
      }, 500);
    });
  });
};

export default displayItems;