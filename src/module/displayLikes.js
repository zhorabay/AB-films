const fetchLikes = async () => {
  const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3Q9ZYh3KJIO90p2c2KK2/likes/';
  const response = await fetch(involvementApiUrl);
  const data = await response.json();
  return data;
};

export default fetchLikes;