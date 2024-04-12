import { supabase } from './supabase.js'

const loginForm = document.getElementById('login-form');
const loginErrorAlert = document.getElementById('login-error-alert');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  });

  if (error) {
    console.error(error);
    loginErrorAlert.style.display = 'block';
    loginErrorAlert.textContent = 'Login failed. Please check your email and password.';
  } else {
    // Login successful, redirect user or perform other actions
    console.log('Login successful!');
    // Optionally, you can redirect the user to another page
    // window.location.href = '/dashboard';
  }
});