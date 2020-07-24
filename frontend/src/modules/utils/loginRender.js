function loginRender() {
  const loginForm = document.getElementById('login-form');
  const logoutForm = document.getElementById('logout-form');
  loginForm.style.display = 'flex';
  logoutForm.style.display = 'none';
}

function logoutRender() {
  const loginForm = document.getElementById('login-form');
  const logoutForm = document.getElementById('logout-form');
  loginForm.style.display = 'none';
  logoutForm.style.display = 'flex';
}

export { loginRender, logoutRender };
