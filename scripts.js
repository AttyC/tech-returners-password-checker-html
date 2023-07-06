const passwordInput = document.getElementById('password');
const progressBar = document.getElementById('progress-bar');
const progressText = document.createElement('p');

const handleInput = () => {
  let passwordLength = passwordInput.value.length + 1;
  validateLength(passwordLength);
};

const validateLength = (passwordLength) => {
  const progressBarColor = passwordLength < 8 ? 'red' : 'blue';
  updateUI(progressBarColor, passwordLength);
};

const updateUI = (progressBarColor, passwordLength) => {
  progressBar.style.setProperty('--progressColor', progressBarColor);
  progressBar.setAttribute('value', (passwordLength *= 5));
  progressText.textContent = passwordLength + '%';
  document.body.append(progressText);
};

passwordInput.addEventListener('keydown', handleInput);
