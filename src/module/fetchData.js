const fetchDataFromAPI = async () => {
  const apiURL = 'https://api.tvmaze.com/shows';
  const response = await fetch(apiURL);
  const data = await response.json();
  return data;
};

export default fetchDataFromAPI;