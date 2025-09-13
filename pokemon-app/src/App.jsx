import Header from "./components/Header"
import PokeCard from "./components/PokeCard"
import SideNav from "./components/SideNav"

import { useState } from "react"

function App() {
  //default pokemn is first pokemno in our list
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(false)
  function hanldeToggleMenu() {
    setShowSideMenu(!showSideMenu);
  }
  return (
    <>
      {/* header is for small deivces and sidenav is for full size devices */}
      <Header hanldeToggleMenu={hanldeToggleMenu} />
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} hanldeToggleMenu={hanldeToggleMenu} showSideMenu={showSideMenu} />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  )
}

export default App
