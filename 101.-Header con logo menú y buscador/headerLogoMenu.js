const searchBox = document.querySelector('#search-box');
const submitButton = document.querySelector('button[type="submit"]');
const highlightStyle = 'background-color: yellow;';

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  const query = searchBox.value.toLowerCase();
  const allElements = document.querySelectorAll('body *');
  const results = [];
  for (const element of allElements) {
    if (element.textContent && element.textContent.toLowerCase().includes(query)) {
      results.push(element);
      element.style = highlightStyle;
    }
  }
  if (results.length > 0) {
    const firstResult = results[0];
    firstResult.scrollIntoView({ behavior: 'smooth' });
  }
});
