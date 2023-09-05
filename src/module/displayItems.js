const displayItems = async () => {
  const apiURL = 'https://api.tvmaze.com/shows/';
  const response = await fetch(apiURL);
  const data = await response.json();
  let items = '';
  data.map((values) => {
    items += `
        <div class="films">
            <div class="film-image">
                <img src="${values.image}" alt="film image"/>
            </div>
            <div class="title">
                <div class="film-name">
                ${values.name}
                </div>
                <div class="like">
                    <i class="fa-solid fa-heart"></i>
                    <p class="likes">likes</p>
                </div>
            </div>
            <button class="comment">Comments</button>
        </div>`;
    return items;
  });
  document.getElementById('display').innerHTML = items;
};
displayItems();