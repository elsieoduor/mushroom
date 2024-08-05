'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { useRouter } from 'next/navigation'; 
import { useCart } from '../../components/shared/CartContext';

interface Product {
  image: string;
  name: string;
  price: string;
  link: string;
  quantity: number;
}

const Page: React.FC = () => {
  const products: Product[] = [
    { image: '/oyster.png', name: 'Oyster', price: 'ksh.200', link:'/product/oyster-mushrooms', quantity: 1 },
    { image: '/button.jpg', name: 'Button', price: 'ksh.300', link:'/product/button-mushrooms', quantity: 1 }
  ];

  const [quantities, setQuantities] = useState<number[]>(products.map(() => 1));
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (index: number) => {
    const product = { id: index + 1, name: products[index].name, price: parseInt(products[index].price.replace('ksh.', '')),image:products[index].image ,quantity: quantities[index] };
    addToCart(product);
    router.push('/cart');
  };

  const decrementQuantity = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] - 1);
    setQuantities(newQuantities);
  };

  const incrementQuantity = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantities[index] + 1;
    setQuantities(newQuantities);
  };

  return (
    <div className='container px-2 '>
      <Navbar />
      <h1 className='heading text-center text-3xl font-bold mt-[80px]'>The Mushroom Store</h1>
      <p className='paragraph text-center mt-5'>
        Welcome to our mushroom store! <br /> 
        Feel free to explore, and don&apos;t forget to pick up a free sample while you&apos;re here.
      </p>
      <div className="relative mt-[100px] flex flex-col items-center gap-5">
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 lg:gap-[200px]">
          {products.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <Link href={item.link}>
                <Image alt={item.name} width={200} height={400} src={item.image} className="rounded-lg shadow-sm" />
              </Link>
              <h3 className="card-heading">{item.name}</h3>
              <p className="text-xl">{item.price}</p>
              <h3 className="card-heading mt-3 text-xl">Quantity</h3>
              <div className="flex items-center gap-3">
                <button className="text-white px-2 py-1 font-bold " onClick={() => decrementQuantity(index)}>-</button>
                <p>{quantities[index]}</p>
                <button className="text-white px-2 py-1 font-bold" onClick={() => incrementQuantity(index)}>+</button>
              </div>
              <div className='flex justify-center items-center'>
                <button className="bg-gradient-to-r from-green-800 to-green-900 px-8 py-3 rounded-full drop-shadow-md flex items-center justify-center " onClick={() => handleAddToCart(index)}>Add to cart
                  <Image src="/cart.png" alt="delivery icon" width={20} height={20} className='ml-2' />
                </button>
              </div>
            </div>
          ))}
        </div>
        <a href="" className="bg-gradient-to-r from-green-800 to-green-900 px-8 py-3 rounded-full drop-shadow-md flex items-center justify-center mt-10">Checkout</a>
        <a href="" className="paragraph underline underline-offset-8 hover:text-lime-100">Try our free samples instead</a>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
