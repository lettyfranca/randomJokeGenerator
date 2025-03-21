const jokeText = document.querySelector(".jokeText");
const btnRandom = document.querySelector(".btnGenerateJoke");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => jokeText.innerHTML = item.joke);
    //.then(item => jokeText.textContent = `${item.joke}`);
}

btnRandom.addEventListener('click', () => {
    getJoke();
})
