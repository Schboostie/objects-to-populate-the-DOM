function displayUsers() {
  const userInfo = document.getElementById('user-info');

  let usersHtml = '';
  for (const key in users) {
    if (Object.hasOwnProperty.call(users, key)) {
      const user = users[key];
      usersHtml += `
        <div class="user-card">
          <h2>${user.firstName} ${user.lastName}</h2>
          <p>Age: ${user.age}</p>
          <p>Email: ${user.email}</p>
        </div>
      `;
    }
  }

  userInfo.innerHTML = usersHtml;
}

displayUsers();

