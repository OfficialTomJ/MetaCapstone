import Logo from '../Assets/little-lemon.jpg';

function Header() {
    return(
        <header>
            <img src={ Logo } alt="Logo"></img>
            <h1>Little Lemon</h1>
        </header>
    );
}

export default Header;