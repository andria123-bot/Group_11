const apifetch = 'https://dummyjson.com/posts';

document.addEventListener("DOMContentLoaded", function() {
  const postContainer = document.getElementById('postContainer');
  const searchInput = document.getElementById('searchInput');

  function fetchPosts() {
    fetch(apifetch)
      .then(response => response.json())
      .then(data => renderPosts(data.posts))
      .catch(error => console.error('Error fetching posts: ', error));
  }

  function renderPosts(posts) {
    postContainer.innerHTML = '';
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <p>Likes: ${post.reactions.likes}. Dislikes: ${post.reactions.dislikes}</p>
        <hr>
      `;
      postContainer.appendChild(postDiv);
    });
  }

  function filterPosts() {
    const query = searchInput.value.toLowerCase();
    fetch(apifetch)
      .then(response => response.json())
      .then(data => {
        const filteredPosts = data.posts.filter(post => post.title.toLowerCase().includes(query));
        renderPosts(filteredPosts);
      })
      .catch(error => console.error('Error filtering posts: ', error));
  }

  searchInput.addEventListener('input', filterPosts);
  fetchPosts();
});
