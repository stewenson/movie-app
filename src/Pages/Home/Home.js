import React from 'react'
import { getAuth, signOut } from "firebase/auth";

export default function Home() {
    const auth = getAuth();
    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=> signOut(auth)}>Sign Out</button>
        </div>
    )
}
