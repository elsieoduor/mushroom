import React from 'react'
import Image from 'next/image'
const mushroomsCard = () => {
    const product = [{image:'/oyster.png',name:'Oyster',price:'ksh.200'},{image:'/buttonMush.png',name:'Button',price:'ksh.300'}]
    return (
        <>
            <section className="relative mt-[100px] flex flex-col items-center gap-5">

                <div className="flex flex-col  md:flex-row lg:flex-row gap-10 lg:gap-[200px]">

                    {product.map((item, index) => (
                        <div key={index} className="flex flex-col items-center  gap-3 ">
                            <Image alt="Mushroom 1" width={200} height={400} src={item.image} className="rounded-lg shadow-sm" />
                            <h3 className=" card-heading  ">{item.name}</h3>
                            <p className="text-xl">ksh.200</p>
                            <h3 className=" card-heading mt-3 text-xl">Quantity</h3>
                            <div className="flex items-center gap-3">
                                <Image alt="minus" width={30} height={20} src='/minus.svg' className="rounded-lg shadow-sm cursor-pointer" />
                                <p className="text-xl">20</p>
                                <Image alt="add" width={30} height={20} src='/add.svg' className="rounded-lg shadow-sm cursor-pointer" />
                            </div>
                            <a href="" className="btn">Add to cart</a>
                        </div>
                    ))}

                </div>

                <a href="" className="btn mt-10">View All</a>
                <a href="" className="paragraph underline underline-offset-8 hover:text-lime-100">Try our free samples instead</a>
            </section>

        </>
    )
}

export default mushroomsCard