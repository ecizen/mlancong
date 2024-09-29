// components/SignInButton.js
'use client'

import { signIn } from "next-auth/react";

function SignInButton() {
  return (
    <button onClick={() => signIn("google")} className="text-black text-2xl font-bold">
      Sign in with Google
    </button>
  );
}

export default SignInButton;
