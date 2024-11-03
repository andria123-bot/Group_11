const finderDiv = document.getElementById('finderDiv');
const githubInput = document.getElementById('githubInput');
const searchButton = document.getElementById('searchBtn');
const displayInfo = document.getElementById('displayInfo');

searchButton.addEventListener('click', () => {
  const username = githubInput.value;

  if(username === ''){
    displayInfo.innerHTML = '<p>Please enter a GitHub username</p>';
    return;
  }

  const apiFetch = `https://api.github.com/users/${username}`;

  fetch(apiFetch)
    .then(response => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    })
    .then(data => {
      displayInfo.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.avatar_url}" alt="${data.login}">
        <p>Username: ${data.login}</p>
        <p>Public Repos: ${data.public_repos}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
      `;
    })
    .catch(error => {
      displayInfo.innerHTML = `<p>${error.message}</p>`;
    });
});

function displayUserInfo(user){
  displayInfo.innerHTML = `
    <img src="${user.avatar_url}" alt="Profile Picture">
    <p><strong>Username:</strong> ${user.login}</p>
    <p><strong>Bio:</strong> ${user.bio || 'No bio available'}</p>
    <p><strong>Public Repositories:</strong> ${user.public_repos}</p>
    <a href="${user.html_url}" target="_blank">Visit GitHub Profile</a>
  `
}