import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    };


    const links = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/login"}>Login</Link></li>
        <li><Link to={"/register"}>Register</Link></li>
        <li><Link to={"/orders"}>Orders</Link></li>
        {
            user && <>
                <li><Link to={"/profile"}>Profile</Link></li>
                <li><Link to={"/about"}>About</Link></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Firebase-Auth</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <p>{user?.email}</p>
                {user ? <a onClick={handleSignOut} className="btn">Log out</a> : <Link to={"/login"} className="btn">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;