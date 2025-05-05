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
                        <Image 
                            src="/login/ChatHi.png" 
                            alt="Ghost Mascot" 
                            width={80} 
                            height={80} 
                            className="h-auto mb-4"
                            priority
                            style={{ objectFit: 'contain' }}
                            unoptimized
                        />
                        <h2 className="text-2xl font-bold text-white mb-1">
                            Welcome Chat-kun!
                        </h2>
                        <p className="text-gray-400">
                            or lurkers..
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
                                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                    Continue with Google
                                </>
                            )}
                        </button>

                        <button
                            onClick={handleTwitchLogin}
                            className="group relative flex w-full justify-center items-center px-4 py-3 bg-[#111] hover:bg-[#222] border border-gray-700 rounded-full text-white font-medium transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-[#9146FF]">
                                <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43z"/>
                            </svg>
                            Continue with Twitch
                        </button>

                        <button
                            onClick={handleEmailLogin}
                            className="group relative flex w-full justify-center items-center px-4 py-3 bg-[#111] hover:bg-[#222] border border-gray-700 rounded-full text-white font-medium transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-white">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                            Continue with Email
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
