import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <div className='flex justify-between items-center'>
            <div className=''>
                {user && user.email}
            </div>
            <div className='nav space-x-5'>
                <Link to='/'>Home</Link>
                <Link to='/Career'>About</Link>
                <Link to='/about'>Home</Link>
                <Link to='/about'>Dev information</Link>
            </div>
            <div className='login flex gap-2 items-center'>
                <div className=''>
                    {
                        user && user?.email 
                        ? <div className='flex flex-col items-center'>
                            <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                            <p>{user.displayName}</p>
                        </div> 
                        : <img src={userIcon} alt="" />
                    }
                    
                </div>
                {
                    user && user?.email 
                    ? <button onClick={logOut} className='btn btn-neutral rounded-none'>Log Out</button>
                    : <Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;