import React, {useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from './CartContext';
const mushroomsCard = () => {
    const product = [{image:'/oyster.png',name:'Oyster',price:'ksh.200',link:'/product/oyster-mushrooms'},{image:'/buttonMush.png',name:'Button',price:'ksh.300',link:'/product/oyster-mushrooms' }]
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const router = useRouter();
    const handleAddToCart = () => {
        const product = { id: 1, name: 'Oyster Mushroom', price: 200, quantity };
        addToCart(product);
        router.push('/cart');
      };

    return (
        <>
            <section className="relative mt-[100px] flex flex-col items-center gap-5">

                <div className="flex flex-col  md:flex-row lg:flex-row gap-10 lg:gap-[200px]">

                    {product.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-3 ">
                            <Link href={item.link}>
                            <Image alt="Mushroom 1" width={200} height={400} src={item.image} className="rounded-lg shadow-sm" />
                            <h3 className=" card-heading  ">{item.name}</h3>
                            <p className="text-xl">ksh.200</p>
                            <h3 className=" card-heading mt-3 text-xl">Quantity</h3>
                            <div className="flex justify-center items-center space-x-4 mb-4">
                                <button className="text-white px-2 py-1 font-bold " onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                                  <p>{quantity}</p>
                                <button className="text-white px-2 py-1 font-bold" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button className="bg-gradient-to-r from-green-800 to-green-900 px-8 py-3 rounded-full drop-shadow-md flex items-center justify-center " onClick={handleAddToCart}>Add to cart
                                <Image src="/cart.png" alt="delivery icon" width={20} height={20} className='ml-2' />
                                </button>
                            </div>
                            </Link>
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