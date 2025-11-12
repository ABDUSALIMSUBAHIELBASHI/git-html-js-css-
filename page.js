
document.addEventListener('DOMContentLoaded', () => {
  const myForm = document.getElementById('myform');
  myForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    console.clear();
    console.log(' Form Submitted ');
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password ? '' : '(empty)');
    if (!email || !username || !password) {
      alert('Please fill out all fields before submitting.');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
    alert('Form submitted successfully!');
    myForm.reset(); 
  });
});
