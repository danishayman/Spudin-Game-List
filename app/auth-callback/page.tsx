'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';

export default function AuthCallbackPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        // Successful login, redirect to home
        router.push('/');
      } else {
        // Failed login or user canceled, redirect to login
        router.push('/login');
      }
    }
  }, [user, loading, router]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-6"></div>
      <p className="text-lg">Processing authentication...</p>
    </div>
  );
} 