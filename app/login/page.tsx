'use client';

import { auth } from '@/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        setError('');
        const provider = new GoogleAuthProvider();
        
        try {
            const result = await signInWithPopup(auth, provider);
            // Successful login - you might want to redirect user or update UI
            console.log(`Signed in as ${result.user.displayName}`);
            // Redirect can be added here
        } catch (error) {
            console.error("Login error:", error);
            setError('Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleTwitchLogin = () => {
        // Implement Twitch login functionality
        alert('Twitch login to be implemented');
    };

    const handleEmailLogin = () => {
        // Implement Email login functionality
        alert('Email login to be implemented');
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-black to-[#0a0a0a] text-white">
            {/* Header/Logo */}
            <div className="w-full max-w-7xl mx-auto px-4 py-6">
                <div className="flex items-center">
                    <Image 
                        src="/navbar/logo.png" 
                        alt="MYGAMELIST" 
                        width={180} 
                        height={50} 
                        className="h-auto"
                        priority
                        style={{ objectFit: 'contain' }}
                        unoptimized
                    />
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex items-center justify-center w-full max-w-md px-4">
                <div className="w-full bg-[#111] bg-opacity-60 rounded-2xl p-8 shadow-xl border border-gray-800">
                    {/* Mascot and welcome message */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#222] to-[#333] flex items-center justify-center mb-4">
                            <Image 
                                src="/login/ChatHi.png" 
                                alt="Ghost Mascot" 
                                width={60} 
                                height={60} 
                                className="h-auto"
                                priority
                                style={{ objectFit: 'contain' }}
                                unoptimized
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-1">
                            Welcome Chat-kun!
                        </h2>
                        <p className="text-gray-400">
                            or strangers..
                        </p>
                    </div>

                    {/* Error message */}
                    {error && (
                        <div className="bg-red-900/40 text-white p-3 rounded-lg text-sm mb-4">
                            {error}
                        </div>
                    )}

                    {/* Login buttons */}
                    <div className="space-y-4">
                        <button
                            onClick={handleGoogleLogin}
                            disabled={isLoading}
                            className="group relative flex w-full justify-center items-center px-4 py-3 bg-[#111] hover:bg-[#222] border border-gray-700 rounded-full text-white font-medium transition"
                        >
                            {isLoading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing in...
                                </span>
                            ) : (
                                <>
                                    Continue with Google
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 ml-2 fill-white">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-7.5v3l3-3-3-3v3H7.5v-3h3z"/>
                                    </svg>
                                </>
                            )}
                        </button>

                        <button
                            onClick={handleTwitchLogin}
                            className="group relative flex w-full justify-center items-center px-4 py-3 bg-[#111] hover:bg-[#222] border border-gray-700 rounded-full text-white font-medium transition"
                        >
                            Continue with Twitch
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 ml-2 fill-white">
                                <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43z"/>
                            </svg>
                        </button>

                        <button
                            onClick={handleEmailLogin}
                            className="group relative flex w-full justify-center items-center px-4 py-3 bg-[#111] hover:bg-[#222] border border-gray-700 rounded-full text-white font-medium transition"
                        >
                            Continue with Email
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 ml-2 fill-white">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </button>
                    </div>

                    {/* Terms and privacy */}
                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-400">
                            By signing up, you agree to our <Link href="/terms" className="text-[#CD1818] hover:text-red-400">Terms of Service</Link> and <Link href="/privacy" className="text-[#CD1818] hover:text-red-400">Privacy Policy</Link>. For information on how we utilize cookies, please refer to our <Link href="/cookies" className="text-[#CD1818] hover:text-red-400">Cookies Policy</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
