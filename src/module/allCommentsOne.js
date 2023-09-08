const apiKey = '3Q9ZYh3KJIO90p2c2KK2';
const end = '/comments';
const commUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

export const renderComment = async (id, name, date, comment) => {
  const response = await fetch(`${commUrl}${apiKey}${end}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id, creation_date: date, username: name, comment,
    }),
  });
  return response;
};

const fetchComment = async (id) => {
  const reponseComment = await fetch(`${commUrl}${apiKey}${end}?item_id=${id}`);
  const itemData = await reponseComment.json();

  if (!reponseComment.ok) {
    return null;
  }
  return itemData;
};

const createComments = ({ comment, username, creation_date }) => {
  const commentli = document.createElement('li');
  commentli.className = 'comment-li';
  commentli.innerHTML = `
  <p class="date"><span><i class="fa-solid fa-user"> </i><span>${username} </span> </span><span>${creation_date} </span></p>
  <p class = "user-comment"><span> ${comment} </span></p>
  `;
  return commentli;
};

export const generateComment = async (id) => {
  const commentUl = document.createElement('ul');
  commentUl.id = 'comments-section';
  commentUl.innerHTML = '';
  const comments = await fetchComment(id);

  if (comments === null) {
    const noCommentLi = document.createElement('p');
    noCommentLi.className = 'no_comment_li';
    noCommentLi.textContent = 'Be the first to comment';
    commentUl.append(noCommentLi);
  } else {
    comments.forEach((comment) => {
      commentUl.append(createComments(comment));
    });
  }
  return commentUl;
};