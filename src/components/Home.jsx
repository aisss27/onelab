import {Link} from "react-router-dom";
import './style.css'

export const Home = () => {
    return (
        <nav className='navigation-menu'>
            <Link to='/add'>Navigate to ADD</Link>
            <Link to='/list'>Navigate to LIST</Link>
        </nav>
    )
}