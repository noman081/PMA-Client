import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    let signUpError;
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    useEffect(() => {
        if (user || gUser) {
            navigate('/');
            console.log(user || gUser);
        }
    }, [user, gUser, navigate]);

    if (loading || gLoading || updating) {
        return <Loading />
    }
    if (error || gError || updateError) {
        signUpError = (error.message || gError.message || updateError.message);
    };
    const onSubmit = async (data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        reset();
    };
    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Register</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div>
                            <label className="block text-gray-700">Your Name</label>
                            <input type="text" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please enter a valid email'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <input type="password" name="" id="" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password should be more than 6 characters'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signUpError && <span className='text-red-500'>{signUpError}</span>}
                        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Register</button>
                    </form>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <button onClick={handleGoogleSignIn} type="button" className="w-full block bg-white hover:bg-red-500 hover:text-white focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div className="flex items-center justify-center">
                            <span className="ml-4">
                                Log in
                                with
                                Google</span>
                        </div>
                    </button>

                    <p className="mt-8">Already have an account? <Link to='/login' className="text-blue-500 hover:text-blue-700 font-semibold">Login</Link></p>


                </div>
            </div>

        </section>
    );
};

export default Register;