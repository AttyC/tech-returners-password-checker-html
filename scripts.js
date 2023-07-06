const input = document.getElementById('password');
const progressBar = document.getElementById('progress-bar');

const handleInput = () => {
  let passwordLength = input.value.length + 1;
  validateLength(passwordLength);
  passwordLength *= 5;
  progressBar.setAttribute('value', passwordLength);
};

const validateLength = (passwordLength) => {
  const progressBarColor = passwordLength < 8 ? 'red' : 'blue';
  progressBar.style.setProperty('--progressColor', progressBarColor);
};

input.addEventListener('keydown', handleInput);
