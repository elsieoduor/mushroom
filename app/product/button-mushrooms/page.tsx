'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRouter } from 'next/navigation';
import { useCart } from '@/components/shared/CartContext';
import Link from 'next/link';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

const Page = () => {
  const items = [
    { src: '/oyster.png', name: 'Oyster Mushroom', price: 'Kshs. 200' },
  ];
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    const product = { id: 1, name: 'Button Mushroom', price: 200, image:'/button.jpg', quantity };
    addToCart(product);
    router.push('/cart');
  };

  return (
    <div className="container mx-auto px-2">
      <Navbar />
      {/* Breadcrumbs */}
      <div className='overflow-x-hidden'>
        <section className="flex justify-center w-full text-center my-4 px-4">
          <nav className="flex items-center inline-flex overflow-hidden">
            <a href="/product" className="text-white underline outline-none p-3 pr-2 relative transition-colors duration-200 focus:bg-gray-800 focus:text-white active:bg-gray-800 active:text-gray-800">
              Products
            </a>
            <span >/</span>
            <a href="/product/button-mushrooms" className="text-white no-underline outline-none p-3 pr-5 relative transition-colors duration-200 focus:bg-gray-800 focus:text-white active:bg-gray-800 active:text-gray-800">
              Button Mushroom
            </a>
          </nav>
        </section>

        {/* Product body */}
        <div className="min-h-screen p-4 md:p-10 text-white">
          <section className="flex flex-col items-center">
            {/* Image */}
            <div className="mb-10 w-full max-w-lg">
              <Image
                src="/button.jpg"
                alt="Mushroom Image"
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>

            {/* Text */}
            <section className="w-full md:w-2/3 px-4 md:px-0">
              {/* Title */}
              <div className="text-center mb-10">
                <h4 className="text-2xl font-bold">Button Mushrooms</h4>
                <h5 className="text-xl mb-2">Ksh. {quantity * 300}</h5>
                <p className="text-sm mb-4">Delivery cost is calculated after your order request is submitted from your Cart.</p>
                <h4 className="text-lg mb-2">Quantity</h4>
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <button className="text-white px-2 py-1 font-bold" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                  <p>{quantity}</p>
                  <button className="text-white px-2 py-1 font-bold" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className="bg-gradient-to-r from-green-800 to-green-900 px-8 py-3 rounded-full drop-shadow-md flex items-center justify-center"
                    onClick={handleAddToCart}
                  >
                    Add to cart
                    <div className="relative w-5 h-5 ml-2">
                      <Image
                        src="/cart.png"
                        alt="cart icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-2">Product Description</h3>
                <p className="text-sm mb-4">Welcome to our online store featuring the versatile and nutritious Button Mushroom! Our Button Mushrooms are meticulously cultivated to ensure the highest level of freshness and quality, perfect for your culinary creations.</p>
                <p className="text-sm mb-4">Button Mushrooms are not only appealing in appearance but also packed with numerous health benefits. They are a rich source of essential nutrients, including vitamins, minerals, and antioxidants, which support overall health and well-being. Their immune-boosting properties help strengthen the body’s defenses against illnesses and infections.</p>
              </div>

              {/* Recipe */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-2">Recipe</h3>
                <p className="text-sm mb-4">Cooking with Button Mushrooms is an exciting culinary adventure. Their mild flavor and firm texture make them an excellent addition to a variety of dishes, from salads and pastas to soups and stir-fries. Here's a simple and delicious recipe for sautéed Button Mushrooms with garlic and herbs:</p>
                <h4 className="text-lg mb-2">Ingredients:</h4>
                <ul className="list-disc list-inside text-sm mb-4">
                  <li>1 lb Button Mushrooms</li>
                  <li>2 cloves garlic, minced</li>
                  <li>2 tablespoons olive oil</li>
                  <li>Salt and pepper to taste</li>
                  <li>Fresh herbs (such as thyme or parsley), chopped (optional)</li>
                </ul>
                <h4 className="text-lg mb-2">Instructions:</h4>
                <ol className="list-decimal list-inside text-sm">
                  <li>Clean the Button Mushrooms with a damp cloth to remove any debris.</li>
                  <li>Slice the mushrooms into bite-sized pieces.</li>
                  <li>Heat the olive oil in a large skillet over medium heat. Add the minced garlic and sauté until fragrant, about 1-2 minutes.</li>
                  <li>Add the Button Mushrooms to the skillet and sauté for 5-7 minutes until tender and lightly browned.</li>
                  <li>Season with salt and pepper to taste, and sprinkle with fresh herbs if desired.</li>
                  <li>Serve hot and enjoy the rich flavors of your homemade Button Mushroom dish!</li>
                </ol>
              </div>

              {/* Health Benefits */}
              <div>
                <h3 className="text-xl font-bold mb-2">Health Benefits</h3>
                <p className="text-sm mb-4">In summary, Button Mushrooms are a culinary delight that offer both flavor and nutrition. Whether you're an experienced chef or a beginner in the kitchen, their versatility and health benefits make them an indispensable ingredient. Button Mushrooms provide a range of health benefits, including:</p>
                <ul className="list-disc list-inside text-sm mb-4">
                  <li>Rich in Nutrients: They are packed with essential vitamins, minerals, and antioxidants, contributing to overall well-being.</li>
                  <li>Supports Immune Function: With immune-boosting properties, Button Mushrooms help fortify the body’s defenses against illnesses and infections.</li>
                  <li>Promotes Heart Health: Certain compounds in Button Mushrooms have been linked to improved cardiovascular health, including cholesterol regulation and blood pressure management.</li>
                  <li>Anti-Cancer Potential: Studies suggest that Button Mushrooms contain compounds with anti-cancer properties, potentially inhibiting the growth and spread of cancer cells.</li>
                  <li>Weight Management: Low in calories and fat, yet high in fiber, Button Mushrooms can aid in weight management by promoting satiety and aiding digestion.</li>
                </ul>
                <p className="text-sm">While Button Mushrooms are no substitute for medical treatment, incorporating them into your diet can undoubtedly contribute to a healthier lifestyle. So why wait? Indulge in the culinary delights and health benefits of Button Mushrooms today!</p>
              </div>
            </section>
          </section>
        </div>

        {/* You may like */}
        <section className="px-4">
          <h3 className="text-center mb-4">You may also like this</h3>
          {/* Carousel */}
          <div className="min-h-fit flex items-center justify-center mb-10 mt-10">
            <Carousel className="w-full max-w-xs md:max-w-lg flex justify-items-center">
              <CarouselContent>
                {items.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-4 flex flex-col items-center text-white ml-20">
                      <Link href='/product/oyster-mushrooms'>
                        <div className="relative w-20 h-20">
                          <Image
                            src={item.src}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                      </Link>
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
