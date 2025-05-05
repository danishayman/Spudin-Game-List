'use client';

import { auth } from '@/firebaseConfig';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        setError('');
        const provider = new GoogleAuthProvider();
        
        try {
            await signInWithRedirect(auth, provider);
            // The page will redirect to Google's auth page
            // After authentication, the user will be redirected back to the app
        } catch (error) {
            console.error("Login error:", error);
            setError('Login failed. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white">
            <Navbar />
            
            {/* Main content */}
            <div className="flex-1 flex items-center justify-center w-full px-4 py-16">
                <div className="w-full max-w-md bg-gray-900/60 rounded-2xl p-8 shadow-xl border border-gray-800">
                    {/* Welcome message */}
                    <div className="flex flex-col items-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Welcome to Spudin's GameList
                        </h2>
                        <p className="text-gray-400 text-center">
                            Track your game collection, rate titles, and connect with other gamers.
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
                            className="group relative flex w-full justify-center items-center px-4 py-3 bg-white hover:bg-gray-100 rounded-full text-gray-800 font-medium transition"
                        >
                            {isLoading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                    </div>

                    {/* Terms and privacy */}
                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-400">
                            By signing up, you agree to our <Link href="/terms" className="text-red-500 hover:text-red-400">Terms of Service</Link> and <Link href="/privacy" className="text-red-500 hover:text-red-400">Privacy Policy</Link>.
                        </p>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}
