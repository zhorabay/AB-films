const itemCounter = () => {
  const elements = document.querySelector('.display').children.length;
  return elements;
};

export const amount = (displayItems) => displayItems.length;
export default itemCounter;