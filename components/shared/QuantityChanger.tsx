'use client';
import React, { useState } from 'react';

const QuantityChanger: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = (): void => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = (): void => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="flex justify-center items-center space-x-4 mb-4">
      <button  onClick={handleDecrement}  className="bg-white text-black px-2 py-1 rounded border border-gray-300" aria-label="Decrease quantity" >
        -
      </button>
      <p>{quantity}</p>
      <button  onClick={handleIncrement} className="bg-white text-black px-2 py-1 rounded border border-gray-300" aria-label="Increase quantity" >
        +
      </button>
    </div>
  );
};

export default QuantityChanger;
