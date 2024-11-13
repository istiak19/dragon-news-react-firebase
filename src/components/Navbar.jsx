import { Link } from "react-router-dom";
import userPic from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="fake-div"></div>
            <div className="flex flex-row gap-3">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="flex items-center gap-3">
                <div>
                    <img src={userPic} alt="" />
                </div>
                <div>
                    <button className="btn btn-neutral rounded-none px-5">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;