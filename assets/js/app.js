const url =
  // "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const input = document.querySelector('.form-input');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = input.value;
        // Appeler la fonction de recherche ici
        searchWikipedia(searchTerm);
    });
});
function searchWikipedia(searchTerm) {
  // Utilisez une API pour interroger Wikipedia
  const apiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${searchTerm}&origin=*`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayResults(data))
      .catch(error => console.error('Error fetching data:', error));
}
function displayResults(data) {
  const resultsContainer = document.querySelector('.results');
  resultsContainer.innerHTML = ''; // Efface les résultats précédents

  for (let i = 0; i < data[1].length; i++) {
      const title = data[1][i];
      const snippet = data[2][i];

      const resultItem = document.createElement('div');
      resultItem.classList.add('result-item');

      const titleElement = document.createElement('h4');
      titleElement.textContent = title;

      const snippetElement = document.createElement('p');
      snippetElement.textContent = snippet;

      resultItem.appendChild(titleElement);
      resultItem.appendChild(snippetElement);

      resultsContainer.appendChild(resultItem);
  }
}