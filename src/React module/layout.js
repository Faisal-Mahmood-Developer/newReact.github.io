import { Link, Outlet, link } from "react-router-dom";
import '../../src/index.css';



const Layout = () => {
    return (
        <>
            <nav>
                <ul className="myStyle">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/form'>Form</Link></li>
                
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;