import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from "./ui/button.jsx"

function Header() {
  return (
    <>
    <nav className='flex items-center justify-between py-4'>
        <Link>
        <img src="/logo.png" alt="hired logo"  className='h-20'/>
        </Link>

        <Button variant="outline">Login</Button>
        {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
    </nav>
    </>
  )
}

export default Header