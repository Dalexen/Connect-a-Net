let accounts = {};

function showCreateAccount() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('create-account-form').style.display = 'block';
}

function showLogin() {
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('create-account-form').style.display = 'none';
}

function createAccount() {
  const name = document.getElementById('create-name').value;
  const username = document.getElementById('create-username').value;
  const password = document.getElementById('create-password').value;

  if (accounts[username]) {
    alert('Username already exists!');
  } else {
    accounts[username] = { name, password };
    alert('Account created successfully!');
    showLogin();
  }
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  if (accounts[username] && accounts[username].password === password) {
    sessionStorage.setItem('loggedIn', username);
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid username or password!');
  }
}