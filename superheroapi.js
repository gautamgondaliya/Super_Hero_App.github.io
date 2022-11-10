console.log("hello");
const SUPERHERO_TOKEN ='137901539009118';

const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`


const superheroButton = document.getElementById('superheroButton');
 const heroImageDiv = document.getElementById('heroImage');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');


const getRandomSuperHero = (id,name) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.powerstats)
        const superHero = json;
        showHeroInfo(json);
        
     })

}

const statToEmoji = {
    intelligence:'🧠',
    strength:'💪',
    speed:'🏃',
    combat:'⚔️',
    durability:'✊',
    power:'⚡'
}

const showHeroInfo = (Character) => {
    const name = `<h2> ${Character.name} </h2>`;
    const img = `<img src="${Character.image.url}" height = 200px width = 200px />`
   const stats =  Object.keys(Character.powerstats).map(stat => {
       return  `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${Character.powerstats[stat]}</p>`
    }).join('')

   // console.log(stats.join(''))
//    console.log(name);  
    heroImageDiv.innerHTML = `${name}${img}${stats}`
   
}

const getSearchSuperHero = (name) =>{
    console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        //console.log(hero)
        showHeroInfo(hero);
    })
}


const randomHero = ()=>{
    const numberOfHeroes = 731;
    return Math.floor(Math.random()*numberOfHeroes)+1;
}
superheroButton.onclick = ( ) => getRandomSuperHero(randomHero());
searchButton.onclick =( ) => getSearchSuperHero(searchInput.value);


 