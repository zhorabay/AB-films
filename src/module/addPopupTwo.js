const baseApi = 'https://api.tvmaze.com/shows/';

export const showDetails = async (id) => {
  try {
    const response = await fetch(`${baseApi}${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const popupCloseBtn = () => {
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    const popupModal = document.querySelector('.popupContainer');
    popupModal.style.display = 'none';
    document.body.style.overflow = 'scroll';
  });
};