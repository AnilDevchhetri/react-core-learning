import { first151Pokemon, getFullPokedexNumber } from "../utils" //in unitl i has index.js as it is the defualt file to export so it use index.js here
export default function SideNav() {
    return (
        <nav>
            <div className={"header"}>
                <h1 className="text-gradient">Pokemon Card</h1>
            </div>
            <input />
            {first151Pokemon.map((pokemon, pokemonIndex) => {
                return (
                    <button className={'nav-card'} key={pokemonIndex}>
                        <p>{getFullPokedexNumber(pokemonIndex)} {pokemon}</p>
                        <p> {pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}