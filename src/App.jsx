import React from 'react'
import Router_App from './config/Router_App'
// import { Navbar_Component } from './components/Navbar_Component'


const App = () => {
  return (
    <div className='bg-bg_color h-[100dvh]'>
                  {/* <Navbar_Component /> */}

      <div>
        <Router_App />
      </div>
    </div>
  )
}

export default App