import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';
import useSupervisor from '../../Hooks/useSupervisor';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        <Loading />
    }
    const [supervisor, setSupervisor] = useSupervisor(user);
    const logOut = () => {
        signOut(auth);
        setSupervisor(false);
        localStorage.removeItem('accessToken');
    }
    return (
        <div className="navbar bg-sky-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/review'>Reviews</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        {
                            user && <li><Link to='/dashboard'>Dashboard</Link></li>
                        }
                        <li>{user ?
                            <button className="btn btn-ghost" onClick={logOut}>Sign Out</button>
                            : <Link to='/login'>Login</Link>}</li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">PMA</Link>
            </div>
            <div className="navbar-center">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            <div className="navbar-end mr-10 hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    {
                        supervisor && <>
                            <li><Link to='/addProject'>Add Projects</Link></li>
                            <li><Link to='/confirmEnrollment'>Confrim Enrollment</Link></li>
                            <li><Link to='/allUser'>See all user</Link></li>
                        </>
                    }
                    {
                        (user && !supervisor) && <li><Link to='/myProject'>My Project</Link></li>
                    }
                    <li><Link to='/contact'>Contact</Link></li>
                    <li className='my-auto'>{user ?
                        <button className="btn btn-ghost" onClick={logOut}>Sign Out</button>
                        : <Link to='/login'>Login</Link>}</li>
                </ul>
            </div>
        </div >
    );
};

export default Header;