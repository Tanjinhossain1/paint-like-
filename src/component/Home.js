import React from 'react';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <div class="hero min-h-screen bg-no-repeat" style={{backgroundImage: `url(https://placeimg.com/1000/800/arch)`}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                        <p class="mb-5">Paint what you want.</p>
                        <p>There you can paint anything when you login then you can paint hear so first to login then you go paint </p>
                       {
                        user? <button class="btn btn-primary hover:bg-pink-700 duration-700 ease-in">Paint</button>: <button class="hover:bg-pink-700 duration-700 ease-in btn btn-primary">Login / Paint</button>
                       }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;