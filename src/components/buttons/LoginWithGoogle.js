'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { signIn, useSession } from "next-auth/react";

export default function LoginWithGoogle() {
  const data = useSession();
  console.log(data)
  
  return (
    <button
      onClick={() => signIn('google')}
      className="bg-white shadow text-center w-full py-4 flex gap-3 justify-center items-center">
      <FontAwesomeIcon icon={faGoogle} className="h-6" />
      <span>Sign In with Google</span>
    </button>
  );
}