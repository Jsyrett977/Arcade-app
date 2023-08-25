import { NavLink } from "react-router-dom"
const NavBar = () => {
    return(
        <nav id='nav-bar'>
            <NavLink to='/' className='nav-item'>Home</NavLink>
            <NavLink to='/tic' className='nav-item'>Tic-Tac-Toe</NavLink>
        </nav>
    )
}
export default NavBar;