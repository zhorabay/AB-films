const itemCounter = require('./itemsCounter.js').default;
const { amount } = require('./itemsCounter.js');

describe('itemCounter', () => {
  it('should return the correct number of elements in .display', () => {
    document.body.innerHTML = `
      <div class="display">
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;

    const count = itemCounter();
    expect(count).toBe(3);
  });
});

describe('amount', () => {
  it('should return the length of the provided array', () => {
    const displayItems = [1, 2, 3, 4];
    const itemCount = amount(displayItems);

    expect(itemCount).toBe(4);
  });
});
