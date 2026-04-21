// IMAGE CAROUSEL
let images = [
  "https://picsum.photos/id/101/600/300",
  "https://picsum.photos/id/102/600/300",
  "https://picsum.photos/id/103/600/300"
];

let index = 0;

function showImage(){
  document.getElementById("carouselImage").src = images[index];
}

function nextImage(){
  index = (index + 1) % images.length;
  showImage();
}

function prevImage(){
  index = (index - 1 + images.length) % images.length;
  showImage();
}

// API FETCH (JOKE API)
function getJoke(){
  fetch("https://official-joke-api.appspot.com/random_joke")
  .then(response => response.json())
  .then(data => {
    document.getElementById("jokeText").innerText =
      data.setup + " 😂 " + data.punchline;
  })
  .catch(error => {
    document.getElementById("jokeText").innerText = "Error fetching joke!";
  });
}