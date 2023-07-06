const input = document.getElementById('password');

const handleInput = () => {
  console.log(input.value.length + 1);
};
input.addEventListener('keydown', handleInput);
