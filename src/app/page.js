'use client'

import { useEffect, useState } from "react"
import app from "./firebase"
import { getAuth } from "firebase/auth"
import { useRouter } from "next/navigation"
import Dashboard from '@/app/dashboard/page'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const Login = () => {
  const [user, setUSer] = useState(null)
  const router = useRouter();

  useEffect(()=> {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user)=> {
       if(user){
        setUSer(user)
        console.log('user signin' ,user)
       } else {
        setUSer(null)
        console.log('user not found')
       }
    });
    return () =>unsubscribe();
  }, [])
  
  const GoogleSignIn =  async () =>{
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('user signed in successfully', user)
      router.push('/dashboard');
    } catch (error) {
      console.log('login denied', error.message);
    }
  }
  return(
    <div className="flex flex-col items-center justify-center h-screen">
       {user ? (
         <Dashboard/>
       ) : (<button
        onClick={GoogleSignIn}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        >
           Sign With Google
       </button>)}
        
    
    </div>
  )
}

export default Login;
