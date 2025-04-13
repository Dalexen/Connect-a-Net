let accounts = {};

function showLogin() {
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('create-account-form').style.display = 'none';
  document.getElementById('message').textContent = '';
}

function showCreateAccount() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('create-account-form').style.display = 'block';
  document.getElementById('message').textContent = '';
}

function createAccount() {
  const username = document.getElementById('create-username').value;
  const password = document.getElementById('create-password').value;

  if (accounts[username]) {
    document.getElementById('message').textContent = 'Username already exists!';
  } else if (username && password) {
    accounts[username] = password;
    document.getElementById('message').textContent = 'Account created successfully!';
    showLogin();
  } else {
    document.getElementById('message').textContent = 'Please fill out all fields!';
  }
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  if (accounts[username] === password) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('file-container').style.display = 'block';
  } else {
    document.getElementById('message').textContent = 'Invalid username or password!';
  }
}

function logout() {
  document.getElementById('file-container').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
  showLogin();
}