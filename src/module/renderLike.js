const renderLike = async (id) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3Q9ZYh3KJIO90p2c2KK2/likes/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  if (response.ok) {
    const likeCountElement = document.getElementById(`like-count-${id}`);
    if (likeCountElement) {
      const currentLikes = parseInt(likeCountElement.innerText, 10) || 0;
      likeCountElement.innerText = (currentLikes + 1).toString();
    }
  }
  return response;
};

export default renderLike;