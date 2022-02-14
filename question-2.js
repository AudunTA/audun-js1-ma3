//Oppgave 2
const key = "6f7da5b300254f9dac4dec0006835cb3";
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";

const container = document.querySelector(".container");
const loading = document.querySelector(".loading");
async function apiFunction() {
  try {
    const respons = await fetch(url + key);
    const result = await respons.json();
    for (let i = 0; i < 8; i++) {
      //remove loading if the API call successful
      loading.innerHTML = "";
      container.innerHTML += `<div class="items"> <h1>${result.results[i].name}</h1>
            <p>rating:${result.results[i].rating}</p>
            <p>number of tags: ${result.results[i].tags.length}`;
    }
  } catch (error) {
    //removes the loading after 1 second if an error occures, letting the user see that it loaded.
    setTimeout(() => {
      loading.innerHTML="";
    }, 1000);

    //display error to user
    container.innerHTML = `<div class="error">An error has occured while calling the API`;

    //get the detailed error in the console.
    console.log(error);
  } 
  
}

apiFunction();
