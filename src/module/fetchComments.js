const commentSection = async (id, name, comment) => {
    const newRequest = new Request('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FXnRwBWXn2Q28VOmP7yL/comments');
  
    const requestBody = {
        "item_id": id,
        "username": name,
        "comment": comment,
    }; 
  
    const fetchApi = await fetch(newRequest, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody),
    });
  
    return fetchApi;
  };

console.log(commentSection(1, 'Bhushan', 'hello bro how are you'));
