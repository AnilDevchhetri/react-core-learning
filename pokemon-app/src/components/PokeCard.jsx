
import { useEffect, useState } from 'react'
export function PokeCard(props) {
    const { selectedPokemon } = props; //destuchred the selectedPokemon here so we can use that here
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        //if loading, exit loop 
        if (loading || !localStorage) { return; }
        //check if the selected pokemn information is availabel in the cache
        //1. define the cache
        let cache = {}
        if (localStorage.getItem('pokedex')) {
            cache = JSON.parse(localStorage.getItem('pokedex'))
        }
        //2. check if the selcted pokemn is in the cach, otherwise fetch from the api
        if (selectedPokemon in cache) {
            //read from cache
            setData(cache[selectedPokemon])
            return
        }
        //we passed all the cache now we have to fetch dat data from api
        async function fetchPokemonData() {
            setLoading(true)
            try {
                const baseUrl = 'https://pokeapi.co/api/v2/';
                const suffix = 'pokemon/' + selectedPokemon
            } catch (error) {
                //show error
                setLoading(false)
            }

        }

        //3. if we fetch from the api, make sure to the save the infomration to the cache for the next time
    }, [selectedPokemon])

    return (
        <div>pokecard</div>
    )
}