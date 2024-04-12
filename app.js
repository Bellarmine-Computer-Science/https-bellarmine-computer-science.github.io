import { supabase } from './supabase.js'

const loginForm = document.getElementById('login-form');
const loginErrorAlert = document.getElementById('login-error-alert');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      loginErrorAlert.style.display = 'block';
      loginErrorAlert.textContent = error.message;
    } else {
      // Login successful, redirect user or perform other actions
      console.log('Login successful!');
      // Optionally, you can redirect the user to another page
      // window.location.href = '/dashboard';
    }
  } catch (error) {
    console.error(error);
    loginErrorAlert.style.display = 'block';
    loginErrorAlert.textContent = 'An unexpected error occurred. Please try again later.';
  }
});