
import { useEffect, useState } from 'react'
import { first151Pokemon, getFullPokedexNumber } from '../utils';
import TypeCard from './TypeCard';
import Modal from './Modal';
export default function PokeCard(props) {
    const { selectedPokemon } = props; //destuchred the selectedPokemon here so we can use that here
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const { name, height, abilities, stats, types, moves, sprites } = data || {}//destructure data;
    const [skill, setSkill] = useState(null)
    const [loadingSkill, setLoadingSkill] = useState(false)

    const imgList = Object.keys(sprites || {}).filter(val => {
        if (!sprites[val]) { return false }//if the sprite image is undeived
        if (['versions', 'other'].includes(val)) { return false }
        return true
    })

    async function fetchMoveData(move, moveUrl) {
        if (loadingSkill || !localStorage || !moveUrl) { return }
        //check cache for move
        let c = {}
        if (localStorage.getItem('pokemon-move')) {
            c = JSON.parse(localStorage.getItem('pokemon-move'));
        }
        if (move in c) {
            setSkill(c[move])
            console.log("finde move in cace")
            return
        }
        try {

            setLoadingSkill(true)
            const res = await fetch(moveUrl);
            const moveData = await res.json();
            console.log("width json movedata", moveData)
            const description = moveData?.flavor_text_entries.filter(val => {
                return val.version_group.name = 'firered-leafgreen'
            })[0]?.flavor_text;

            const skillData = {
                name: move,
                description
            }
            setSkill(skillData)
            c[move] = skillData
            localStorage.setItem('pokemon-move', JSON.stringify(c))

        } catch (error) {
            console.log(error)
        } finally {
            setLoadingSkill(false)
        }
    }

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
                const suffix = 'pokemon/' + first151Pokemon[selectedPokemon]
                const finalUrl = baseUrl + suffix
                const res = await fetch(finalUrl)
                const pokemonData = await res.json();
                setData(pokemonData)
                cache[selectedPokemon] = pokemonData
                localStorage.setItem('pokedex', JSON.stringify(cache))
                console.log("fetch data from url")

            } catch (error) {
                //show error
                console.log("error to display is", error.message)
            } finally {
                setLoading(false)
            }

        }

        fetchPokemonData()

        //3. if we fetch from the api, make sure to the save the infomration to the cache for the next time
    }, [selectedPokemon])

    if (loading || !data) {
        return (
            <div><h4>Loading....</h4></div>
        )
    }
    return (
        <div className='poke-card'>
            {/* compononents with children */}
            {skill && (<Modal handleCloseModal={() => { setSkill(null) }}>
                <div>
                    <h6 className='skill-name'>Name</h6>
                    <h2>{skill.name.replaceAll('-', ' ')}</h2>
                </div>
                <div>
                    <h6>Description</h6>
                    <p>{skill.description}</p>
                </div>
            </Modal>)}
            <div>
                <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
                <h2>{name}</h2>
                <div className='type-container'>
                    {types.map((typeObj, typeIndex) => {
                        return (
                            <TypeCard key={typeIndex} type={typeObj.type?.name} />
                        )
                    })}
                </div>
            </div>
            <img className='default-img' src={'/pokemon/' + getFullPokedexNumber(selectedPokemon) + '.png'} alt={`${name}-large-mg`} />
            <div className='img-container'>
                {
                    imgList.map((spriteUrl, spriteIndex) => {
                        const imgUrl = sprites[spriteUrl]
                        return (
                            <img key={spriteIndex} src={imgUrl} alt={`${name}-img-${spriteUrl}`} />
                        )
                    })
                }
            </div>
            <h3>Stats</h3>
            <div className='stats-card'>
                {
                    stats.map((statObj, statIndex) => {
                        const { stat, base_stat } = statObj
                        return (
                            <div key={statIndex} className='stat-item'>
                                <p>{stat?.name.replaceAll('-', '')}</p>
                                <h4>{base_stat}</h4>
                            </div>
                        )
                    })
                }
            </div>
            <h3>Moves</h3>
            <div className='pokemon-move-grid'>
                {
                    moves.map((moveObj, moveIndex) => {
                        return (
                            <button className="button-card pokemon-move" key={moveIndex} onClick={() => { fetchMoveData(moveObj?.move?.name, moveObj?.move?.url) }}  >
                                <p>
                                    {moveObj?.move?.name.replaceAll('-', ' ')}
                                </p>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}