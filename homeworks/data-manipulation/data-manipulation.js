run();

async function run() {
    const heroes = await getHeroes();
    console.log(heroes);

    // Encontra o herói favorito.
    const favoriteHero = heroes.find(hero => hero.name === 'Batman');
    console.log(favoriteHero);

    // Filtra apenas os heróis com a primeira letra do seu nome.
    const heroesStartingWithC = heroes.filter(hero => hero.name.substr(0,1) === 'C');
    console.log(heroesStartingWithC);

    // Mapeia os heróis apenas pelo nome.
    const heroesNames = heroesStartingWithC.map(hero => hero.name);
    console.log(heroesNames);

    // Conta quantos heróis da Marvel e da DC existem na lista.
    const reduceInitialValue = {dc: 0, marvel: 0};
    const qtdHeroes = heroes.reduce((acc, hero) => {
        const publisher = hero.biography.publisher;
        if(publisher === 'DC Comics') {
            acc.dc += 1;
        } else {
            acc.marvel += 1;
        }
    }, reduceInitialValue);
}

// Obtem o JSON.
async function getHeroes() {
    try {
        const requestResult = await fetch('https://akabab.github.io/superhero-api/api/all.json');
        const jsonResult = await requestResult.json();
        return jsonResult;
    } catch (error) {
        console.error("Error!");
    }
}