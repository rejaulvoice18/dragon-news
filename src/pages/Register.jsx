import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({})
    const navigate = useNavigate()


    const handleSubmit = e => {
        // form ta jokhon submit hoy tokhon ekta action create kore jar jonno
        // page ta relode hoy, aita prevent korar jonno event.preventDefault()
        e.preventDefault()

        // javascript er ekta build in object use kore form data niye asha jay
        // to seita kora hochhe aikhane
        const form = new FormData(e.target)
        const name = form.get('name');
        if (name.length < 5) {
            setError({ ...error, name: "name must be more than 5 characters long" })
            return;
        }
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        createNewUser(email, password)
            .then(result => {
                const newUser = result.user;
                setUser(newUser)
                updateUserProfile({displayName: name, photoURL: photo})
                .then(() => {
                    navigate('/')
                })
                .catch(error => {
                })
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })


    }


    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center pt-4'>Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    {/* name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        {
                            error.name && (
                                <label className="label text-xs text-red-600">
                                    {error.name}
                                </label>)
                        }
                    </div>
                    {/* photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input name='photo' type="text" placeholder="photo-url" className="input input-bordered" required />
                    </div>
                    {/* email input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Sign Up</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Already have an account? <Link to="/auth/login" className='text-red-600'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;