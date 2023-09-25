import React, { useState } from 'react';
import './Header.css'
import logo from '../../Assets/emirates-logo-badge.svg'

function Header() {
    const [menuOpen,setMenuOpen]=useState(false)
  return (
      <>
    <div className='hidden header-container  w-full  h-[50px]'>
      
        <div className='select'>


                <div className='logo flex items-end justify-center'>
                    <img src={logo} alt="ing" />
                </div>
                <ul className='list px-2'>
                <li>BOOK</li>
                <li>MANAGE</li>
                <li>EXPERIENCE</li>
                <li>WHERE WE FLY</li>
                <li>LOYALITY</li>
                <li>HELP</li>
            </ul>
        </div>
    </div>


<div className='header-togle '>
<img className='w-[50px] h-[90%]' src={logo} alt="ing" />

<div onClick={()=>setMenuOpen(!menuOpen)} className=' h-full w-[20%] flex justify-center items-center  font-bold text-white cursor-pointer'  >Menu</div>
</div>
{

menuOpen &&<>

<ul onClick={()=>setMenuOpen(!menuOpen)}  className='togle-list'>
<li>BOOK</li>
<li>MANAGE</li>
<li>EXPERIENCE</li>
<li>WHERE WE FLY</li>
<li>LOYALITY</li>
<li>HELP</li>
    </ul>
</>
}
      </>
  );
}

export default Header;