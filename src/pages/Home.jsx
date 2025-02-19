import React, { createContext, useState } from 'react'
import Navpar from '../Components/Navpar'

export const Langcontext = createContext()
export default function Home() {
  const [lang ,setlang] = useState('عربي')
  return (
    
    <Langcontext.Provider value={{lang ,setlang}}>
    <Navpar/>
    </Langcontext.Provider>
    
  )
}
