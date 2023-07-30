const users = JSON.parse(localStorage.getItem('users'));

console.log(users);

const currentUser = users.find(user => user.taken);

console.log(currentUser);

document.querySelector(
  '.welcome-msg'
).textContent = `Welcome! ${currentUser['fulln-signup']}`;
