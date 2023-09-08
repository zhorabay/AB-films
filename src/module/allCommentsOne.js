const apiURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiMainId = '3Q9ZYh3KJIO90p2c2KK2';
const tail = '/comments';

export const submitComment = async (id, name, date, comment) => {
  const API_Fetch = await fetch(`${apiURL}${apiMainId}${tail}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id, creation_date: date, username: name, comment,
    }),
  });
  return API_Fetch;
};

const commentGetter = async (id) => {
  const gotCmt = await fetch(`${apiURL}${apiMainId}${tail}?item_id=${id}`);
  const intD = await gotCmt.json();

  if (!gotCmt.ok) {
    return null;
  }
  return intD;
};

const newCmnt = ({ comment, username, creation_date }) => {
  const cmtliEle = document.createElement('li');
  cmtliEle.className = 'comment-li';
  cmtliEle.innerHTML = `
  <p class="date"><span><i class="fa-solid fa-user"> </i><span>${username} </span> </span><span>${creation_date} </span></p>
  <p class = "user-comment"><span> ${comment} </span></p>
  `;
  return cmtliEle;
};

export const createCmnt = async (id) => {
  const allCmnt = document.createElement('ul');
  allCmnt.id = 'comments-section';
  allCmnt.innerHTML = '';
  const comments = await commentGetter(id);

  if (comments === null) {
    const nocmtliEle = document.createElement('p');
    nocmtliEle.className = 'no_comment_li';
    nocmtliEle.textContent = 'Be the first to comment';
    allCmnt.append(nocmtliEle);
  } else {
    comments.forEach((comment) => {
      allCmnt.append(newCmnt(comment));
    });
  }
  return allCmnt;
};