import { useState } from "react"
import { first151Pokemon, getFullPokedexNumber } from "../utils" //in unitl i has index.js as it is the defualt file to export so it use index.js here
export default function SideNav(props) {
    const { selectedPokemon, setSelectedPokemon } = props
    const [searchValue, setSearchValue] = useState('')

    const filteredPokemn = first151Pokemon.filter((ele, eleIndex) => {
        //if full pokedex number icnlude curent search value reaturn true 
        if (getFullPokedexNumber(eleIndex).includes(searchValue)) { return true }
        //if pokemon name includes the curent search value return true
        if (ele.toLowerCase().includes(searchValue.toLowerCase())) { return true }

        //otherwose exclude value from the array
        return false
    })

    return (
        <nav>
            <div className={"header"}>
                <h1 className="text-gradient">Pokemon Card</h1>
            </div>
            <input placeholder="Eg. 001 or Bulba..." value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
            {filteredPokemn.map((pokemon, pokemonIndex) => {
                const truePokedexNumber = first151Pokemon.indexOf(pokemon);
                return (
                    <button onClick={() => { setSelectedPokemon(truePokedexNumber) }} className={'nav-card' + (truePokedexNumber === selectedPokemon ? 'nav-card-selected' : '')} key={pokemonIndex} >
                        {/* <p>{getFullPokedexNumber(pokemonIndex)} {pokemon}</p> */}
                        <p>{getFullPokedexNumber(truePokedexNumber)}</p>
                        <p> {pokemon}</p>
                    </button>
                )
            })}
        </nav >
    )
}