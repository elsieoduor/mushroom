import React from "react";
import Image from "next/image";
const Footer = () => {
    const socials = [{icon:'/facebook.svg',src:'/facebook.com'},{icon:'/instagram.svg',src:'/instagram.com'},{icon:'/whatsapp.svg',src:'whatsapp.com'}]
    return (
        <div>
            <footer className="bg-black flex flex-col lg:items-center mt-[100px] py-10">
                <Image alt="logo" width={100} height={100} src="/logo.svg" className="m-auto" />
                <div className="flex flex-col lg:flex-row lg:items-baseline lg:gap-28 px-8 py-8 ">
                    <div className=" flex flex-col  lg:items-start mt-5  lg:mt-0 rounded-lg">
                        <p className="footer-heading mt-3   ">Connect With Us</p>
                        <div className="flex gap-3 cursor-pointer mt-2">
                            {socials.map((item, index) => (
                                <div key={index}>
                                    <a href={item.src}>
                                        <Image
                                            alt="add"
                                            width={20}
                                            height={20}
                                            src={item.icon}
                                            className="rounded-lg shadow-sm"
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center mt-3 gap-3">
                            <Image alt="phone" width={20} height={20} src="/phone.svg" />
                            <p className="paragraph">0712345678</p>
                        </div>
                        <div className="flex items-center  mt-3 gap-3">
                            <Image alt="mail" width={20} height={20} src="/mail.svg" />
                            <p className="paragraph">email@mara.co.ke</p>
                        </div>
                        <p className=" footer-heading  mt-3"> Mara Support</p>
                        <p className=" footer-heading mt-3 "> Monday to Friday</p>
                        <p className="paragraph"> 10am - 7pm</p>
                        <p className="footer-heading  mt-3">Saturday & Sunday</p>
                        <p className="paragraph">10am - 6pm</p>

                    </div>
                    <div className="flex flex-col">
                        <h3 className="footer-heading  mt-10">Shop</h3>
                        <a href="" className="paragraph hover:text-lime-100">Oyster Mushrooms</a>
                        <a href="" className="paragraph hover:text-lime-100">Button Mushrooms</a>
                    </div>
                    <div>
                        <h3 className="footer-heading mt-10">My Account</h3>
                        <a href="" className="paragraph hover:text-lime-100">Shopping Cart</a>

                    </div>
                </div>
                <Image alt="logo" width={100} height={100} src="/jsweb logo.png" className="m-auto" />
                <p className="paragraph text-center"> 2024 | Jsweb.co.ke | made in kenya</p>
            </footer>
        </div>
    );
};

export default Footer;