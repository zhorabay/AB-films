import fetchDataFromAPI from './fetchData.js';
import fetchLikes from './displayLikes.js';

const displayItems = async () => {
  const [likesData, baseData] = await Promise.all([fetchLikes(), fetchDataFromAPI()]);
  const combinedData = baseData.map((show) => {
    const likes = likesData.find((like) => like.item_id === show.id);
    return {
      ...show,
      likes: likes ? likes.likes : 0,
    };
  });
  let items = '';
  combinedData.forEach((values) => {
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
                      <i class="fa-solid fa-heart"> ${values.likes} </i>
                      <p class="likes">likes</p>
                  </div>
                  <button class="comment">Comments</button>
              </div>
          </div>`;
  });
  document.querySelector('.display').innerHTML = items;
};

export default displayItems;