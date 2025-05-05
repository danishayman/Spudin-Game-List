'use client';

import { useAuth } from '@/lib/auth';
import { auth } from '@/firebaseConfig';
import { signOut } from 'firebase/auth';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const { user, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-black text-white py-3 border-b border-gray-800">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            SPUDIN'S GAMELIST
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/games" className="hover:text-red-500 transition-colors">
            Games
          </Link>
          <Link href="/upcoming" className="hover:text-red-500 transition-colors">
            Upcoming
          </Link>
          <Link href="/popular" className="hover:text-red-500 transition-colors">
            Popular
          </Link>
          <Link href="/charts" className="hover:text-red-500 transition-colors">
            Charts
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          {loading ? (
            <div className="h-8 w-8 rounded-full bg-gray-700 animate-pulse"></div>
          ) : user ? (
            <div className="relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2"
              >
                <div className="h-8 w-8 rounded-full overflow-hidden">
                  {user.photoURL ? (
                    <Image 
                      src={user.photoURL} 
                      alt={user.displayName || 'User'} 
                      width={32} 
                      height={32}
                      className="object-cover" 
                      unoptimized
                    />
                  ) : (
                    <div className="h-full w-full bg-red-600 flex items-center justify-center text-white">
                      {user.displayName?.[0] || user.email?.[0] || 'U'}
                    </div>
                  )}
                </div>
                <span className="hidden md:inline">{user.displayName || user.email}</span>
              </button>
              
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-1 z-10">
                  <Link 
                    href="/profile" 
                    className="block px-4 py-2 text-sm hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link 
                    href="/my-games" 
                    className="block px-4 py-2 text-sm hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Games
                  </Link>
                  <Link 
                    href="/settings" 
                    className="block px-4 py-2 text-sm hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button 
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link 
              href="/login" 
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full font-medium transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
} 