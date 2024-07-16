'use client';
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import MushroomsCard from "../components/shared/MushroomCard";

export default function Home() {
  const socials = [{ icon: '/facebook.svg', src: '/facebook.com' }, { icon: '/instagram.svg', src: '/instagram.com' }, { icon: '/whatsapp.svg', src: 'whatsapp.com' }]
  const product = [{ image: '/oyster.png', name: 'Oyster', price: 'ksh.200' }, { image: '/buttonMush.png', name: 'Button', price: 'ksh.300' }]

  return (
    <>
    <main className="flex flex-col px-3 lg:px-10 ">
    <Navbar />

      {/* hero section */}
      <section className="flex flex-col items-center lg:items-start  lg:flex-row lg:justify-between  relative top-10 m-auto self-center gap-10  ">
        <div className="flex flex-col lg:w-[50%] lg:items-start items-center gap-5">
          <h1 className='heading lg:text-left  '>Mara Gold <br /> Mushrooms</h1>
          <p className=" paragraph text-center text-balance lg:text-left" >Mara Gold Mushrooms is an organic mushroom farm in Kenya. We are your go-to source for fresh organic mushrooms, mushroom growing kits, and information about mushrooms.</p>
          <div className="flex flex-col gap-5 md:flex-row">
            <a href="/product" className="flex font-thin border text-base rounded-lg w-max m-auto py-2 px-3 ">Shop <Image alt="cart logo" width={20} height={20} src='/cart.png' className="ml-1" /></a>
            <a href="/cart" className="flex  font-thin border text-base rounded-lg m-auto py-2 px-3 ">Try Free Sample <Image alt="cart logo" width={20} height={20} src='/arrow-right.svg' className="ml-1" /></a>
          </div>
        </div>
        <div className="rounded-lg shadow-sm" >
          <Image alt="hero image" width={400} height={400} src='/mushroom-hand.png' />
        </div>
      </section>

      {/* mushroom store  */}
      <section className="relative mt-[140px] flex flex-col items-center gap-5">
        <h1 className="heading text-center">Mushroom Store</h1>
        <MushroomsCard />
      </section>

      {/* order section */}
      <section className="">
        <h1 className="heading text-center mt-[100px]">For Business</h1>
        <div className="flex flex-col items-center lg:flex-row  align-baseline lg:items-baseline m-auto">
          <div className="mt-20 flex flex-col gap-8 ">
            <h1 className="heading text-center lg:text-left">For <br /> Bulk Orders</h1>
            <p className="paragraph text-center lg:text-left  lg:w-[80%] ">Enjoy volume discounts on bulk orders from Mara Gold Mushrooms, and don&apos;t forget to try our free samples!</p>
            <div className="flex flex-col items-center lg:flex-row gap-5  lg:gap-5">
              <Link href="" className="btn">Get a Quote</Link>
              <Link href="" className="btn">Try Free Sample</Link>
            </div>
          </div>

          {/* connect with us card */}
          <div className="bg-black flex flex-col items-center lg:items-start lg:w-[40%]  bg-opacity-35 px-8 py-8 mt-5  lg:mt-0 rounded-lg">
            <h3 className="font-poppins italic ">Connect With Us</h3>
            <div className="flex gap-3 cursor-pointer mt-2">
              {socials.map((item, index) => (
                <div key={index} >
                  <Link href={item.src}>
                    <Image alt="add" width={20} height={20} src={item.icon} className="rounded-lg shadow-sm" />
                  </Link>
                </div>
              ))}
            </div>
            <h3 className="font-poppins italic text-lg mt-3 underline">Mara Support</h3>
            <p className="font-italiana font-semibold mt-3 ">Monday to Friday</p>
            <p className="font-poppins font-thin"> 10am - 7pm</p>
            <p className="font-poppins font-semibold mt-3">Saturday & Sunday</p>
            <p className="font-Poppins font-thin">10am - 6pm</p>
            <div className="flex items-center mt-3 gap-3">
              <Image alt="phon" width={20} height={20} src="/phone.svg" />
              <p >0712345678</p>
            </div>
            <div className="flex items-center  mt-3 gap-3">
              <Image alt="phon" width={20} height={20} src="/mail.svg" />
              <p >email@mara.co.ke</p>
            </div>
          </div>
        </div>
      </section>

      {/* client review  */}
      <section className="flex flex-col items-center">
        <h1 className="heading text-center mt-[100px]">What are our customers saying</h1>
        <p className="paragraph text-center my-3">Check out most recent review</p>

        <div className="flex gap-10 lg:w-[70%] ">
          <Image alt="left arrow" width={40} height={40} src='/left-arrow.svg' className="" />
          <div className="bg-black flex flex-col gap-3 items-start lg:items-start bg-opacity-35 px-8 py-8 mt-5 lg:mt-0 rounded-lg ">
            <Image alt="star" width={20} height={20} src='/star.svg' className="" />
            <p className=" paragraph ">Fast delivery and top-notch quality. Highly recommend! Superb customer service and an impressive selection of mushrooms. Will definitely order again.</p>
            <div className="flex items-center gap-3">
              <Image alt="profile pic" width={50} height={50} src='/profile-pic.jpg' className="rounded-full object-cover w-[50px] h-[50px]" />
              <p className="font-medium">Sean Alfred</p>
            </div>
          </div>
          <Image alt="right arrow" width={40} height={40} src='/right-arrow.svg' className="" />
        </div>
        <div className='flex justify-center items-center'>
         <Link href="/cart" className="mt-10 px-8 py-3 rounded-full drop-shadow-md flex items-center justify-center " >Shop <Image alt="cart logo" width={20} height={20} src='/cart.png'  className='ml-2' /></Link>
        </div>
        <p className="text-sm mt-5 underline underline-offset-8 hover:text-lime-100"><Link href="">Try free samples instead</Link></p>
      </section>

      {/* our story section */}
      <section className="flex flex-col gap-5 items-center">
        <h1 className="heading mt-[100px] text-center"> Our Story</h1>
        <p className="paragraph text-balance text-center">Mara Gold mushrooms is a business committed to providing a full and consistent array of mushrooms, mushroom food products and educational information to our community.</p>
        <p className="paragraph text-balance text-center"> Although recently established in 2023, Mara Gold is a premier provider of gourmet mushrooms and culinary experiences. Committed to sustainability and quality. Mara Gold offers a wide range of premium mushrooms, mushroom-based products, and educational resources to inspire creativity in the kitchen. With an unwavering dedication to exceptional taste and a passion for mushrooms. Mara Gold continues to delight and amaze food enthusiasts, chefs, and nature lovers in Kenya alike.</p>
        <p className="paragraph text-balance text-center"> Our business is dedicated to providing locally grown, organic specialty mushrooms at a reasonable rate and making them readily available to our community.</p>
        <Image alt="team picture" width={500} height={500} src='/team-pic.png' className="rounded-lg" />
      </section>

      {/* contact us section */}
      <section className="flex flex-col gap-5">
        <h1 className="heading text-center mt-[100px]"> Contact Us</h1>
        <p className="paragraph text-balance text-center"> we are here to help! <br /> Connect with us so we can create the most value we can for you and your business. </p>
        <form className="flex flex-col gap-4 mt-5 lg:px-20">
          <input type="text" placeholder="Name" className="border border-gray-300 bg-black bg-opacity-30 text-white h-10 px-5  rounded-lg text-sm focus:outline-none" />
          <input type="email" placeholder="Email" className="border border-gray-300 bg-black bg-opacity-30 text-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" />
          <input type="text" placeholder="Company Name" className="border border-gray-300 bg-black bg-opacity-30 text-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" />
          <textarea placeholder="Message" className="border border-gray-300 bg-black bg-opacity-30 text-white h-20 px-5 pr-16 rounded-lg text-sm focus:outline-none"></textarea>
          <button type="submit" className="btn mt-2 m-auto flex align-middle gap-3 items-center">Submit<Image alt="arrow right" width={20} height={30} src='/arrow-right.svg' className=" mt-1" /></button>
        </form>
      </section>

      {/* map section find us  */}
      <section className="flex flex-col gap-5">
        <h1 className="heading mt-[100px] text-center">Find Us Here</h1>
        <p className="paragraph text-center text-balance">Visit us at our retail location. <br /> Keep an eye out for Mara Gold fresh mushrooms and dry products in your local Area grocery store.</p>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.686825723591!2d36.94332147311191!3d-1.3645755357128122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d2efdecbc1b%3A0xda14106b195c41e7!2sSyokimau%20-%20Katani%20Rd!5e0!3m2!1sen!2ske!4v1721075443547!5m2!1sen!2ske" style={{ border: '0', width: '100%', aspectRatio: '1/1' }} allowFullScreen loading="lazy" ></iframe>
        </div>

      </section>

    <Footer />
    </main>
    </>
  );
}