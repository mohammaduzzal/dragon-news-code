import { Link } from "react-router-dom";
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
           <div className=""></div>

           <div className="nav space-x-4">
            <Link to='/'>Home</Link>
            <Link to='/career'>Career</Link>
            <Link to='/about'>About</Link>
           </div>

           <div className="login flex gap-2 items-center">
            <div>
            <img src={user} alt="" />
            </div>
            <button className="btn btn-neutral rounded-none">Login</button>
           </div>
        </div>
    );
};

export default Navbar;