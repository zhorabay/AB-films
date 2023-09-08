const noOfCmntFunction = () => {
  const cmntCheck = document.getElementById('comments-section').children.length;
  return cmntCheck;
};

export const commentCount = (commentList) => commentList.length;
export default noOfCmntFunction;
