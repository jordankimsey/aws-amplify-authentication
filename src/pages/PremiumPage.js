import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react'

const PremiumPage = () => {
  return (
      <Authenticator>
          {({ signOut }) => (
              <div>
                  <h1>Hello! This is the premium content section.</h1>
                  <button onClick={signOut}>Sign Out</button>
              </div>
          )}
    </Authenticator>
  )
}

export default PremiumPage