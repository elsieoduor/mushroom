// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import { useState } from 'react'
// import Menu from "./Menu";

// const Navbar = () => {
//     const [show, setShowMenu] = useState(false);

//   return (
//     <>
//         <nav className='flex  left-0 bg-gradient-to-r from-[#132F23] to-[#135041] sticky top-0  z-10 justify-between  pt-3 px-8 pb-3 m-auto '>
//             <div className="">
//                 <Image 
//                     alt="logo"
//                     width={100}
//                     height={100}
//                     src="/logo.svg"

//                 ></Image>
//             </div>

//             <div className='flex flex-row  items-center'> 
//                 <Image 
//                     alt="logo"
//                     width={40}
//                     height={40}
//                     src="/menu.svg"
//                     onClick={() => setShowMenu(!show)}
//                     className={show?'hidden':'flex'}

//                 ></Image>
//                     <Image 
//                     alt="logo"
//                     width={40}
//                     height={40}
//                     src="/close.svg"
//                     onClick={() => setShowMenu(!show)}
//                     className={show?'flex':'hidden'}
//                     ></Image>

//             </div>

//             <div className={show ? 'show absolute z-10 top-[97px] left-0 bg-gradient-to-r from-[#132F23] to-[#135041]  h-[90dvh] lg:min-h-screen w-full  pt-5 pl-5 lg:pl-5  lg:px-[80px]' : 'hidden'}>

//             <Menu></Menu>

//             </div>

//         </nav>
      
//     </>
//   )
// }

// export default Navbar
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Menu from './Menu';

const Navbar: React.FC = () => {
    const [show, setShowMenu] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
        <nav className={`flex justify-between items-center p-4 w-full z-10 sticky top-0 transition-all duration-300 ${scroll ? 'bg-gradient-to-r from-[#132F23] to-[#135041] shadow-lg' : ''} ${show ? 'bg-gradient-to-r from-[#132F23] to-[#135041]' : 'bg-transparent'}`}>
            <div>
                <Image alt="logo" width={100} height={100} src="/logo.svg" />
            </div>
            <div className='flex items-center'>
                <Image alt="menu" width={40} height={40} src="/menu.svg" onClick={() => setShowMenu(!show)} className={show ? 'hidden' : 'block cursor-pointer'} />
                <Image alt="close" width={40} height={40} src="/close.svg" onClick={() => setShowMenu(!show)} className={show ? 'block cursor-pointer' : 'hidden'} />
            </div>
            <div className={`${show ? 'block' : 'hidden'} absolute top-[100px] left-0 w-full h-[90vh] lg:h-screen bg-gradient-to-r from-[#132F23] to-[#135041] z-10 pt-5 pl-5 lg:pl-5 lg:px-[80px]`}>
                <Menu />
            </div>
        </nav>
      </>
    );
}

export default Navbar;
