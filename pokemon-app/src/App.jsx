import Header from "./components/Header"
import PokeCard from "./components/PokeCard"
import SideNav from "./components/SideNav"

import { useState } from "react"

function App() {
  //default pokemn is first pokemno in our list
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(true)
  //this does the poosite of waht it shold do i.e when showsidemenu it true it actually false
  function hanldeToggleMenu() {
    setShowSideMenu(!showSideMenu);
  }
  function handleCloseMenu() {
    setShowSideMenu(true)
  }
  return (
    <>
      {/* header is for small deivces and sidenav is for full size devices */}
      <Header hanldeToggleMenu={hanldeToggleMenu} />
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} showSideMenu={showSideMenu} handleCloseMenu={handleCloseMenu} />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  )
}

export default App
