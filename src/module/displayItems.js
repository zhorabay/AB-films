import fetchDataFromAPI from './fetchData.js';

const displayItems = async () => {
  const data = await fetchDataFromAPI();
  let items = '';
  data.forEach((values) => {
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
                      <i class="fa-solid fa-heart"></i>
                      <p class="likes">likes</p>
                  </div>
                  <button class="comment">Comments</button>
              </div>
          </div>`;
  });
  document.querySelector('.display').innerHTML = items;
};

export default displayItems;