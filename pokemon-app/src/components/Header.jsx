export default function Header(props) {
    const { hanldeToggleMenu } = props
    return (
        <header>
            <button onClick={hanldeToggleMenu} className="open-nav-button">
                <i className="fa-solid fa-bars"></i>
            </button>
            <h1 className="text-gradient">Pokedex</h1>
        </header>
    )
}