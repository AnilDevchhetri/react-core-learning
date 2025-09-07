import { Header } from "./components/Header"
import { PokeCard } from "./components/PokeCard"
import { SideNav } from "./components/SideNav"

import { useState } from "react"

function App() {
  //default pokemn is first pokemno in our list
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  return (
    <>
      {/* header is for small deivces and sidenav is for full size devices */}
      <Header />
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  )
}

export default App
