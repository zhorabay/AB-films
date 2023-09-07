const apiID = 'FXnRwBWXn2Q28VOmP7yL';
const tail = '/comments';
const apiURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

export const renderComment = async (id, name, comment) => {
  const response = await fetch(`${apiURL}${apiID}${tail}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id, username: name, comment }),
  });
  return response;
};

export const fetchComment = async (id) => {
  const response = await fetch(`${apiURL}${apiID}${tail}?item_id=${id}`);
  const comments = await response.json();
  return comments;
};

export const createCommentElement = (comment) => {
  const commentLi = document.createElement('li');
  commentLi.textContent = `${comment.username}: ${comment.comment}`;
  return commentLi;
};

export const generateComment = async (id) => {
  const commentUl = document.createElement('ul');
  commentUl.id = 'comments-section';
  commentUl.innerHTML = '';

  const comments = await fetchComment(id);

  if (comments.length === 0) {
    const noCommentLi = document.createElement('p');
    noCommentLi.className = 'no_comment_li';
    noCommentLi.textContent = 'make a new comment';
    commentUl.append(noCommentLi);
  } else {
    comments.forEach((comment) => {
      const commentLi = createCommentElement(comment);
      commentUl.append(commentLi);
    });
  }

  return commentUl;
};
