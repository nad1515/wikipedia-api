const url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=zidane";



const form = document.querySelector('.form');
const input = document.querySelector('.form-input');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(input.value);
  let recherTheme = document.querySelector('.form-input').value;
  console.log(recherTheme);
   let urlAPI ="https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${recherThem}";
//    fetch(urlAPI)
//  .then(response => response.json())
//  .then(response => console.log(JSON.stringify(response)))
//  .catch(error => alert("Erreur : " + error));
fetch(urlAPI)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur lors de la requête. Code HTTP : ${response.status}`);
            }
            return response.json();
        })
        .then(data => afficheResults(data))
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
});
  function afficheResults(info){
    let affichresults = document.querySelector("results");
    console.log(info);
    info.query.search.forEach(resut => {
      let resultItem = document.createElement('div');
            resultat.classList.add('result-item');
            resultat.innerHTML = info.result;
            affichresults.appendChild(resultat);
    });
  }
  

  