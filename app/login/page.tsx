'use client';

import { auth } from '@/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function LoginPage() {
    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            alert(`Signed in as ${user.displayName}`);
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Check console.");
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Sign in with Google</button>
        </div>
    );
}
