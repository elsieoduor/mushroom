'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Menu from "./Menu";

const Navbar = () => {
    const [show, setShowMenu] = useState(false);

  return (
    <>
        <nav className='flex  left-0 bg-gradient-to-r from-[#132F23] to-[#135041] sticky top-0  z-10 justify-between  pt-3 px-8 pb-3 m-auto '>
            <div className="">
                <Image 
                    alt="logo"
                    width={100}
                    height={100}
                    src="/logo.svg"

                ></Image>
            </div>

            <div className='flex flex-row  items-center'> 
                <Image 
                    alt="logo"
                    width={40}
                    height={40}
                    src="/menu.svg"
                    onClick={() => setShowMenu(!show)}
                    className={show?'hidden':'flex'}

                ></Image>
                    <Image 
                    alt="logo"
                    width={40}
                    height={40}
                    src="/close.svg"
                    onClick={() => setShowMenu(!show)}
                    className={show?'flex':'hidden'}
                    ></Image>

            </div>

            <div className={show ? 'show absolute z-10 top-[97px] left-0 bg-gradient-to-r from-[#132F23] to-[#135041]  h-[90dvh] lg:min-h-screen w-full  pt-5 pl-5 lg:pl-5  lg:px-[80px]' : 'hidden'}>

            <Menu></Menu>

            </div>

        </nav>
      
    </>
  )
}

export default Navbar