document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('demoButton');
  const messageArea = document.getElementById('messageDisplay');

  button.addEventListener('click', function() {
    messageArea.textContent =
      'D3 works by connecting data to page elements. Data changes can create, update, or remove visual elements in the browser.';

    button.textContent = 'Summary Shown';
  });
});
