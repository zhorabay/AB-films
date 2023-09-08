import noOfCmntFunction, { commentCount } from './commentsCounter.js';

describe('noOfCmntFunction', () => {
  it('should return the number of child elements', () => {
    document.body.innerHTML = '<div id="comments-section"><p>Comment 1</p><p>Comment 2</p></div>';

    const result = noOfCmntFunction();

    expect(result).toBe(2);
  });
});

describe('commentCount', () => {
  it('should return the length of an array', () => {
    const commentList = ['Comment 1', 'Comment 2', 'Comment 3'];

    const result = commentCount(commentList);

    expect(result).toBe(3);
  });
});
