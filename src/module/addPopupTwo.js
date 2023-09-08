const baseApi = 'https://api.tvmaze.com/shows/';

export const detailsAll = async (id) => {
  try {
    const fetched = await fetch(`${baseApi}${id}`);
    if (!fetched.ok) {
      throw new Error(`HTTP error! Status: ${fetched.status}`);
    }
    return await fetched.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const popupCloseBtn = () => {
  const crossBtn = document.querySelector('.close-btn');
  crossBtn.addEventListener('click', () => {
    const popupModal = document.querySelector('.popupContainer');
    popupModal.style.display = 'none';
    document.body.style.overflow = 'scroll';
  });
};