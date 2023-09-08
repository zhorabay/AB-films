const baseApi = 'https://api.tvmaze.com/shows/';

export const detailsAll = async (id) => {
  const fetched = await fetch(`${baseApi}${id}`);
  if (!fetched.ok) {
    throw new Error(`HTTP error! Status: ${fetched.status}`);
  }
  return fetched.json();
};

export const popupCloseBtn = () => {
  const crossBtn = document.querySelector('.close-btn');
  crossBtn.addEventListener('click', () => {
    const popupModal = document.querySelector('.popupContainer');
    popupModal.style.display = 'none';
    document.body.style.overflow = 'scroll';
  });
};