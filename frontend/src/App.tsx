import { useState } from 'react'
import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import { Button } from './components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to Meetcode</h1>
      <SignedOut>
        <SignInButton mode='modal' >
          <Button>Sign in</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <SignOutButton />
      </SignedIn>
    </div>
  )
}

export default App 
