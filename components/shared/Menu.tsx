import React from "react";
import Image from "next/image";
const Menu = () => {
  const menuitems = [
      {name:'Home',logo:'/home.svg',link:'/'},
      {name:'Mushroom Store',logo:'/store.svg',link:'/mushroomStore'},
      {name:'Cart',logo:'/cart.svg',link:'/cart'}
  ]
  const socials = [{icon:'/facebook.svg',src:'/facebook.com'},{icon:'/instagram.svg',src:'/instagram.com'},{icon:'/whatsapp.svg',src:'whatsapp.com'}]
  return (
    <>
      <div className='flex relative flex-col '>
        {menuitems.map((item, index) => (
          <div key={index}>
            <li className="list-none font-poppins font-medium text-5xl w-max tracking-wide relative  m-3 lg:text-6xl lg:my-3 hover:text-lime-100 transition-all ease-in-out">
              <a href={item.link}>{item.name}</a>
            </li>
          </div>
        ))}
        <p className='hover:text-lime-100 '>
          <a
            href=""
            className="paragraph  left-4 relative top-3 underline underline-offset-8 tracking-wide "
          >
            Free Samples
          </a>
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-between items-start justify-between gap-2 mt-16 relative">
          <div className="flex flex-col ml-3 lg:flex-row items-start lg:items-center gap-3">
            <p className="paragraph">+ 254 7123 456 789</p>
            <p className="paragraph">Maragold.co.ke</p>
            <p className="paragraph">Nairobi, Kenya</p>
          </div>
          <div className="flex mr-10  lg:flex-row items-center w-max gap-3">
            {socials.map((item, index) => (
              <div key={index} className="">
                <a href={item.src}>
                  <Image alt="logo" width={30} height={20} src={item.icon} />
                </a>
              </div>
            ))}
          </div>
      </div>
      </div>

    </>
  );
};

export default Menu;