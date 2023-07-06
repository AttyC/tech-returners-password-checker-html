const passwordInput = document.getElementById('password');
const progressBar = document.getElementById('progress-bar');
const progressText = document.createElement('p');

const handleInput = () => {
  let passwordLength = passwordInput.value.length + 1;
  validateLength(passwordLength);
  progressBar.setAttribute('value', (passwordLength *= 5));
};

const validateLength = (passwordLength) => {
  const progressBarColor = passwordLength < 8 ? 'red' : 'blue';
  progressBar.style.setProperty('--progressColor', progressBarColor);
};

input.addEventListener('keydown', handleInput);
