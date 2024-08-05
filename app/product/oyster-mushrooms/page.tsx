'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRouter } from 'next/navigation';
import { useCart } from '../../../components/shared/CartContext';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

const Page = () => {
  const items = [
    { src: '/button.jpg', name: 'Button Mushroom', price: 'Kshs. 300' },
  ];
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    const product = { id: 1, name: 'Oyster Mushroom', price: 200, image:'/oyster.png', quantity };
    addToCart(product);
    router.push('/cart');
  };

  return (
    <div className="container mx-auto px-2 ">
      <Navbar />
      <div className='overflow-x-hidden'>
      {/* Breadcrumbs */}
      <section className="flex justify-center w-full text-center my-4">
        <nav className="flex items-center inline-flex overflow-hidden">
          <a href="/product" className="text-white underline outline-none p-3 pr-2 relative  transition-colors duration-200 focus:bg-gray-800 focus:text-white active:bg-gray-800 active:text-gray-800">
            Products
          </a>
          <span className="">/</span>
          <a href="/product/oyster-mushrooms" className=" text-white no-underline outline-none p-3 pr-5 relative  transition-colors duration-200 focus:bg-gray-800 focus:text-white active:bg-gray-800 active:text-gray-800">
            Oyster Mushroom
          </a>
        </nav>
      </section>

      {/* Product body */}
      <div className="min-h-screen p-4 md:p-10 text-white">
        <section className="flex flex-col items-center">
          {/* Image */}
          <div className="mb-10 w-full max-w-md">
            <Image src="/oyster.png" alt="Mushroom Image" width={500} height={300} className="w-full h-auto rounded-md object-fit"/>
          </div>

          {/* Text */}
          <section className="w-full md:w-2/3">
            {/* Title */}
            <div className="text-center mb-10">
              <h4 className="text-2xl font-bold">Oyster Mushrooms</h4>
              <h5 className="text-xl mb-2">Ksh. {quantity * 200}</h5>
              <p className="text-sm mb-4">Delivery cost is calculated after your order <br /> request is submitted from your Cart.</p>
              <h4 className="text-lg mb-2">Quantity</h4>
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
            </div>

            {/* Description */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-2">Product Description</h3>
              <p className="text-sm mb-4">Welcome to our online store featuring the delightful and nutritious White Oyster Mushroom! Our White Oyster Mushrooms are cultivated with care, ensuring optimal freshness and quality for your culinary adventures.</p>
              <p className="text-sm mb-4">The White Oyster Mushroom boasts not only a beautiful appearance but also a plethora of health benefits. Rich in antioxidants, it aids in protecting the body against harmful free radicals, safeguarding cellular health.</p>
            </div>

            {/* Recipe */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-2">Recipe</h3>
              <p className="text-sm mb-4">Moreover, its anti-inflammatory properties contribute to reducing inflammation, thereby potentially preventing chronic ailments.
              Cooking with White Oyster Mushrooms opens up a world of culinary possibilities. From stir-fries to soups, its versatility knows no bounds. One particularly delightful recipe is a simple sautéed White Oyster Mushroom dish with garlic and herbs. Here's how to prepare it:</p>
              <h4 className="text-lg mb-2">Ingredients:</h4>
              <ul className="list-disc list-inside text-sm mb-4">
                <li>1 lb White Oyster Mushrooms</li>
                <li>2 cloves garlic, minced</li>
                <li>2 tablespoons olive oil Salt and pepper to taste Fresh herbs (such as thyme or parsley), chopped (optional)</li>
              </ul>
              <h4 className="text-lg mb-2">Instructions:</h4>
              <ol className="list-decimal list-inside text-sm">
                <li>Begin by cleaning the White Oyster Mushrooms with a damp cloth, ensuring they're free from any debris.</li>
                <li>Slice the mushrooms into bite-sized pieces.</li>
                <li>Heat the olive oil in a large skillet over medium heat. Add the minced garlic and sauté until fragrant, about 1-2 minutes.</li>
                <li>Add the White Oyster Mushrooms to the skillet and sauté for 5-7 minutes until tender and lightly browned.</li>
                <li>Season with salt and pepper to taste, and sprinkle with fresh herbs if desired.</li>
                <li>Serve hot and savor the delicious flavors of your homemade White Oyster Mushroom dish!</li>
              </ol>
            </div>

            {/* Health Benefits */}
            <div>
              <h3 className="text-xl font-bold mb-2">Health Benefits</h3>
              <p className="text-sm mb-4">In summary, the White Oyster Mushroom is a culinary gem packed with both flavor and nutrition. Whether you're a gourmet chef or a cooking novice, its versatility and health benefits make it a must-have ingredient in any kitchen.
              White Oyster Mushrooms offer an array of health benefits, including</p>
              <ul className="list-disc list-inside text-sm mb-4">
                <li>Rich in Nutrients: Packed with essential vitamins, minerals, and antioxidants, White Oyster Mushrooms contribute to overall well-being</li>
                <li>Supports Immune Function: With immune-boosting properties, White Oyster Mushrooms help fortify the body's defenses against illnesses and infections.</li>
                <li>Promotes Heart Health: Certain compounds found in White Oyster Mushrooms have been linked to improved cardiovascular health, including cholesterol regulation and blood pressure management.</li>
                <li>Anti-Cancer Potential: Studies suggest that White Oyster Mushrooms contain compounds with anti-cancer properties, potentially inhibiting the growth and spread of cancer cells.</li>
                <li>Weight Management: Low in calories and fat, yet high in fiber, White Oyster Mushrooms can aid in weight management by promoting satiety and aiding digestion.</li>
              </ul>
              <p className="text-sm">While White Oyster Mushrooms are no substitute for medical treatment, incorporating them into your diet can undoubtedly contribute to a healthier lifestyle. So why wait? Indulge in the culinary delights and health benefits of White Oyster Mushrooms today!</p>
            </div>
          </section>
        </section>
      </div>

      {/* You may like */}
      <section>
        <h3 className="text-center">You may also like this</h3>
        {/* Carousel */}
        <div className="min-h-fit flex items-center justify-center mb-10 mt-20">
          <Carousel className="w-full max-w-xs flex justify-items-center">
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-4 flex flex-col items-center text-white ml-20">
                    <Link href='/product/button-mushrooms'><Image src={item.src} alt={item.name} width={80} height={80} className='rounded-md'/></Link>
                    <h4 className="mt-2">{item.name}</h4>
                    <h5 className="mt-1">{item.price}</h5>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <Footer />
      </div>
    </div>
  );
};

export default Page;
