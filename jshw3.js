const formData = document.querySelector('#form-data')
formData.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)

    const name = formData.name.value
    console.log(name)

    pokemonData(name)
})



async function pokemonData(name){
    url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url)
    const data = await response.json()
    const pokeAbility = data['abilities'][0]['ability']['name']
    const attack_stat = data['stats'][1]['base_stat']
    const hp_stat = data ['stats'][0]['base_stat']
    const defense_stat = data['stats'][2]['base_stat']
    const primary_type = data['types'][0]['type']['name']
    const sprite_url = data['sprites']['front_default']
    const gif_sprite_url = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

    const pokeDiv = document.querySelector('.poke-div')
    pokeDiv.innerHTML = `
        <div class="card mx-auto text-bg bg-dark"  style="width: 18rem;">
            <h5 class="card-title text-white">${data.name}</h5>
            <h5 class="card-title text-white">HP: ${hp_stat}</h5>
            <img class="card-img-top" src="${gif_sprite_url}" alt="Card image cap">
            <ul class="list-group list-group-flush">
            <li class="list-group-item text-white bg-dark">Type: ${primary_type}</li>
            <li class="list-group-item text-white bg-dark">Ability: ${pokeAbility}</li>
            <li class="list-group-item text-white bg-dark">Attack: ${attack_stat}</li>
            <li class="list-group-item text-white bg-dark">Defense: ${defense_stat}</li>
            </ul>
          </div>
    `
}
