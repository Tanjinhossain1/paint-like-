import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {
    FaGoogle,
    FaEnvelope,
} from 'react-icons/fa';
import auth from '../firebase.init';
const SignIn = () => {
    const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);
    const [openLogin, setOpenLogin] = useState(false);
    const [passwordLengthError, setPasswordLengthError] = useState('');
    const [specialCharacterError, setSpecialCharacterError] = useState('');
    const [lowerCaseTextError, setLowerCaseTextError] = useState('');
    const [upperCaseTextError, setUpperCaseTextError] = useState('');
    const [passwordNumberError, setPasswordNumberError] = useState('')
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user
      ] = useSignInWithEmailAndPassword(auth);


      if(user || gUser){
        navigate('/paint')
      }
    const SubmitLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value; 
            if (password.length >= 8 && password.length <= 20) {
                setPasswordLengthError('')
                if (password.match(/(?=.*[!@#$%^&*])/)) {
                    setSpecialCharacterError('')
                    if (password.match(/[a-z]/)) {
                        setLowerCaseTextError('');
                        if (password.match(/[A-Z]/)) {
                            setUpperCaseTextError('')
                            if (password.match(/[0-9]/)) {
                                setPasswordNumberError('')
                            //   there you fetch 
                            signInWithEmailAndPassword(email,password)
                            }
                            else {
                                setPasswordNumberError('type Minimum one number (0-9)')
                            }
                        } else {
                            setUpperCaseTextError('Type minimum one UpperCase character (A-Z)')
                        }
                    } else {
                        setLowerCaseTextError('Type minimum one Small character (a-z)')
                    }
                } else {
                    setSpecialCharacterError('Type minimum one special Character (!@#$%^&*)')
                }
            } else {
                setPasswordLengthError('Minimum 8 Character maximum 20')
            }
           
    }
    return (
        <div>
            <div className='bg-[#f6f2f7] min-h-screen py-20'>
                <div className='w-4/4 bg-white sm:w-[600px]  p-8  mx-auto border  rounded-md'>
                    <h2 className='text-center text-2xl font-bold mb-4'> LOGIN</h2>
                    <button onClick={()=>signInWithGoogle()} className='w-full py-4 rounded-lg bg-black text-white flex justify-around items-center mb-4 '>
                        <FaGoogle className=' text-3xl ' />
                        <span className='text-xl'> Continue With Google</span>
                    </button>
        

                   <Link to='/signUp'> <button  className=' mb-4 w-full py-4 rounded-lg bg-[#6e3258] text-white flex justify-around items-center'>
                        <FaEnvelope className=' text-3xl ' />
                        <span className='text-xl'>Sign Up With Email</span>
                    </button></Link>
                    <div className='flex items-center justify-evenly'>
                        <hr className='w-[100px]' />
                        {
                            openLogin ? <p>Continue with your email address</p> :
                                <p className='mx-1'> Already have an account? <button class='text-blue-500' onClick={() => setOpenLogin(true)}>Log in</button></p>
                        }
                        <hr className='w-[100px]' />
                    </div>

                    {
                        openLogin && <>
                            <form  onSubmit={SubmitLogin}>
                                <div className='mt-4'>
                                    <label htmlFor="email" className='font-bold'>Email</label>
                                    <input className='w-full mt-1 px-1 py-2 border-2 hover:border-gray-500 focus-within:border-blue-700  mb-4 outline-none focus-within:hover:border-blue-700 rounded-md border-gray-300' type="email" placeholder='Enter Your Email' name='email' required />
                                    {/* <label className='text-red-600' htmlFor="">{emailError}</label> */}
                                </div>

                                <div className='mt-4'>
                                    <label htmlFor="password" className='font-bold'>Password</label>
                                    <input className='w-full mt-1 px-1 py-2 border-2 hover:border-gray-500 focus-within:border-blue-700   outline-none focus-within:hover:border-blue-700 rounded-md border-gray-300' type="password" placeholder='Enter Your Password' name='password' required />
                                    <label className='text-red-600 ' htmlFor="">{passwordLengthError}{specialCharacterError}{passwordNumberError}{lowerCaseTextError}{upperCaseTextError}</label>
                                </div>
                                <input className='w-full bg-blue-700 py-3 mt-8 rounded-md text-white font-semibold' type="submit" value="Login" />
                           
                            </form>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default SignIn;