// Váriavel que guarda o id "greeting"
const saudacao = document.getElementById("greeting");

// Váriavel que guarda o horário atual em horas
const horarioAtual = new Date().getHours();

if (horarioAtual >= 5 && horarioAtual < 12) {
  saudacao.textContent = "Bom dia";
} else if (horarioAtual >= 12 && horarioAtual < 18) {
  saudacao.textContent = "Boa tarde";
} else {
  saudacao.textContent = "Boa Noite";
}

// Váriavel que guarda o id "search-input"
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist')

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
  hidePlaylists();
  const artistName = document.getElementById('artist-name');
  const artistImg = document.getElementById('artist-img');

  result.forEach(element => {
    artistImg.src = element.urlImg;
    artistName.innerText = element.name;
  });

  resultArtist.classList.remove('hidden');
}

function hidePlaylists() {
  resultPlaylist.classList.add('hidden');
}

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === '') {
    resultPlaylist.classList.add('hidden');
    resultArtist.classList.remove('hidden');
    return;

  }
  requestApi(searchTerm);
})
