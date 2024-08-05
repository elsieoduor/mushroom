import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from './CartContext';


interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  link: string;
}

interface QuantityState {
  [key: number]: number;
}

const MushroomsCard: React.FC = () => {
  const products: Product[] = [
    { id: 1, image: '/oyster.png', name: 'Oyster', price: 200, link: '/product/oyster-mushrooms' },
    { id: 2, image: '/button.jpg', name: 'Button', price: 300, link: '/product/button-mushrooms' }
  ];

  const [quantity, setQuantity] = useState<QuantityState>({});
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (product: Product) => {
    const productWithQuantity = { ...product, quantity: quantity[product.id] || 1 };
    addToCart(productWithQuantity);
    router.push('/cart');
  };

 
  const handleQuantityChange = (id: number, change: number) => {
    setQuantity(prevQuantity => ({
      ...prevQuantity,
      [id]: Math.max(1, (prevQuantity[id] || 1) + change)
    }));
  };

  return (
    <section className="relative mt-[100px] flex flex-col items-center gap-5">
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 lg:gap-[200px]">
        {products.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center gap-3">
            <Link href={item.link}>
              <Image alt={item.name} width={200} height={400} src={item.image} className="rounded-lg shadow-sm" />
            </Link>
            <h3 className="card-heading">{item.name}</h3>
            <p className="text-xl">ksh.{item.price}</p>
            <h3 className="card-heading mt-3 text-xl">Quantity</h3>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <button className="text-white px-2 py-1 font-bold" onClick={() => handleQuantityChange(item.id, -1)}>
                -
              </button>
              <p>{quantity[item.id] || 1}</p>
              <button className="text-white px-2 py-1 font-bold" onClick={() => handleQuantityChange(item.id, 1)}>
                +
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-gradient-to-r from-green-800 to-green-900 px-8 py-3 rounded-full drop-shadow-md flex items-center justify-center"
                onClick={() => handleAddToCart(item)}
              >
                Add to cart
                <Image src="/cart.png" alt="cart icon" width={20} height={20} className='ml-2' />
              </button>
            </div>
          </div>
        ))}
      </div>

      <a href="#" className="btn mt-10">View All</a>
      <a href="#" className="paragraph underline underline-offset-8 hover:text-lime-100">Try our free samples instead</a>
    </section>
  );
};

export default MushroomsCard;
