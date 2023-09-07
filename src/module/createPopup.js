let popup;


const popupContent = document.createElement('div');
popupContent.setAttribute('class', 'popupContainer2');

popupContent.innerHTML += `
<div class="subDivOne">
<img class="movie-img" src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="Poster"></img>
<h2 class="movieName">Under the dome</h2>
<form action="" class="form"></form>
</div>
<div class="subDivTwo">
<h2 class="commentHeading">Comments(<span class="allComments"></span>)</h2>
<ul class="commentsDisplay"></ul>
<div class="inputComments">
 <input required type="text" class="typeName" id="typeName" placeholder="Your Name"><br>
 <input required type="text" class="typeComment"
 id="typeComment" placeholder="Your comment"><br>
 <button type="submit" class="submitComment" id="">Submit</button>
</div>
</div>
`;


export const openPopup = async () => {

   popup = document.querySelector('.popupContainer');

   const backgroundElements = document.querySelectorAll('body > *:not(.popupContainer)');
   backgroundElements.forEach((element) => {
     element.classList.add('blur-background');
   });
   
popup.appendChild(popupContent);

popup.style.display = 'block';

}

export const closePopup = async () => {
  popup.style.display = 'none';

  const backgroundElements = document.querySelectorAll('body > *:not(.popupContainer)');
   backgroundElements.forEach((element) => {
     element.classList.remove('blur-background');
   });
  
}


