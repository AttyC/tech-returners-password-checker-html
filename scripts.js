const input = document.getElementById('password');
const progressBar = document.getElementById('progress-bar');

const handleInput = () => {
  const passwordLength = (input.value.length + 1) * 5;
  progressBar.setAttribute('value', passwordLength);
};
input.addEventListener('keydown', handleInput);
