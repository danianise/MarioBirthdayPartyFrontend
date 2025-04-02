import React from 'react'
import Logo from './Logo'

function Header() {
  return (
    <div className='header'>
        <div id='name_div'>
          <h2 id='header_h2'>Jeffrey Hoey</h2>
        </div>
        <div id='leveled_up_div'>
          has LEVELED UP to age 8!
        </div>
        <div className='mobile'>
          <Logo />
        </div>
    </div>
  )
}

export default Header