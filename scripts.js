const passwordInput = document.getElementById('password');
const progressBar = document.getElementById('progress-bar');
const progressText = document.createElement('p');
const feedback = document.createElement('p');

const handleInput = () => {
  let passwordLength = passwordInput.value.length + 1;
  validateLength(passwordLength);
};

const validateLength = (passwordLength) => {
  let progressBarColor;
  if (passwordLength < 8) {
    feedback.textContent = 'Should be longer';
    progressBarColor = 'red';
  } else if (passwordLength < 12) {
    feedback.textContent = 'Pretty good';
    progressBarColor = 'orange';
  } else {
    feedback.textContent = 'Grrrreat!';
    progressBarColor = 'green';
  }
  updateUI(progressBarColor, passwordLength);
};

const updateUI = (progressBarColor, passwordLength) => {
  progressBar.style.setProperty('--progressColor', progressBarColor);
  progressBar.setAttribute('value', (passwordLength *= 5));
  progressText.textContent = passwordLength + '%';

  document.body.append(progressText);
  document.body.append(feedback);
};

passwordInput.addEventListener('keydown', handleInput);
