'use client';
import React, { useState } from 'react';
import { useCart } from '../../components/shared/CartContext';
import Image from 'next/image';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';

interface FormData {
  name: string;
  phone: string;
  email: string;
  deliveryOption: 'pickup' | 'delivery';
  specialInstructions: string;
}

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    deliveryOption: 'pickup',
    specialInstructions: '',
  });

  const handleRemove = (productId: number) => {
    removeFromCart(productId);
  };

  const handleIncrement = (productId: number, quantity: number) => {
    updateQuantity(productId, quantity + 1);
  };

  const handleDecrement = (productId: number, quantity: number) => {
    if (quantity > 1) {
      updateQuantity(productId, quantity - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateWhatsAppMessage = () => {
    let message = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nDelivery Option: ${formData.deliveryOption}\n\nProducts:\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ${item.quantity} @ Ksh. ${item.price} each\n`;
    });
    message += `\nSpecial Instructions: ${formData.specialInstructions}\n`;
    return encodeURIComponent(message);
  };

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    window.location.href = `https://wa.me/ENTER_WHATSAPP_NUMBER?text=${message}`;
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container px-2 md:px-10 text-white">
      <Navbar />

      {/* TopText */}
      <section className="text-center mt-10 md:mt-20">
        <h1 className="text-2xl md:text-4xl font-bold">Shopping Cart</h1>
        <p className="mt-2 mb-10 md:mb-20 text-xs md:text-sm ">
          Confirm your details and order request. <br />
          After that, you will get prompt assistance <br />
          over the phone and receive <br /> your order quickly.
        </p>
      </section>

      {/* Form */}
      <section className="mb-6 md:mb-10">
        <h3 className="text-xs md:text-base mb-3 text-center">Fill in the following details and proceed to confirm your order request.</h3>
        <form className="space-y-3 flex flex-col items-center">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="block md:w-1/2 p-2 border border-gray-300 rounded text-black shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="text-black md:w-1/2 p-2 border border-gray-300 rounded shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            maxLength={10}
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="block md:w-1/2 p-2 border border-gray-300 rounded text-black shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-2 md:space-y-0 md:space-x-4">
            <label className="mr-4">Delivery Option:</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="deliveryOption"
                  value="pickup"
                  checked={formData.deliveryOption === 'pickup'}
                  onChange={handleChange}
                />
                <span className="ml-2">Pickup</span>
                <Image src="/pickup.png" alt="pickup icon" width={20} height={20} className="ml-2" />
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="deliveryOption"
                  value="delivery"
                  checked={formData.deliveryOption === 'delivery'}
                  onChange={handleChange}
                />
                <span className="ml-2">Delivery</span>
                <Image src="/delivery.png" alt="delivery icon" width={20} height={20} className="ml-2" />
              </label>
            </div>
          </div>
        </form>
      </section>

      {/* Summary  of Products */}
      <section>
        <div className="p-4 text-white">
          <h3 className="text-xs md:text-base mb-1">Confirm that the items in your cart are as desired and confirm your order request.</h3>
          <hr className="mb-4 border-gray-400" />
          <ul className="flex justify-between items-center text-center space-x-10">
            <li className="flex-grow">Product</li>
            <li className="flex-grow">Price</li>
            <li className="flex-grow">Quantity</li>
            <li className="flex-grow">Total</li>
          </ul>
          <hr className="mb-4 border-gray-400" />
          <div className="space-y-8">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-10">
                <Image src={item.image} alt={item.name} width={100} height={100} className="flex-none" />
                <div className="flex-grow text-center">
                  <h4 className="mb-1">{item.name}</h4>
                  <button onClick={() => handleRemove(item.id)} className="text-xs underline">
                    Remove
                  </button>
                </div>
                <p className="flex-grow text-center">Ksh. {item.price}</p>
                <div className="flex items-center space-x-2">
                  <button onClick={() => handleDecrement(item.id, item.quantity)} className="text-white font-bold px-2 py-1 rounded">
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id, item.quantity)} className="text-white font-bold px-2 py-1 rounded">
                    +
                  </button>
                </div>
                <p className="flex-grow text-center">Ksh. {item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <hr className="mt-8 border-gray-400" />
          <div className="flex justify-between items-center mt-4">
            <ul className="flex justify-between items-center w-full">
              <li className="flex-grow text-center">Total</li>
              <li className="flex-grow text-center">Ksh. {totalAmount}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Text area */}
      <form className="text-center">
        <textarea
          placeholder="Special instructions for seller"
          className="bg-white text-black w-full p-4 rounded mt-8 mb-8"
          name="specialInstructions"
          value={formData.specialInstructions}
          onChange={handleChange}
        />
      </form>

      {/* Checkout Button */}
      <section className="text-center">
        <div>
          <button className="bg-gradient-to-r from-green-800 to-green-900 px-8 py-3 rounded-full drop-shadow-md" onClick={handleCheckout}>
            Checkout with WhatsApp
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CartPage;
