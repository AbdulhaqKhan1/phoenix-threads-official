import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const OrderPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="p-8">Product not found.</div>;

  const totalPrice = product.price * quantity;

  const handleOrder = () => {
    const phone = '2349038901516'; // WhatsApp number
    const message = `Hello, I would like to place an order:\n\n` +
      `🧥 Product: ${product.name}\n` +
      `🔢 Quantity: ${quantity}\n` +
      `💵 Total Price: ₦${totalPrice}\n\n` +
      `Please confirm availability.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Order: {product.name}</h2>
      <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
        <img src={product.image} alt={product.name} className="w-full h-72 object-contain mb-4" />
        <p className="mb-2">Name: <strong>{product.name}</strong></p>
        <p className="mb-2">Price: <strong>300,000₦{product.price}</strong></p>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <p className="mb-4 text-lg font-semibold">Total: ₦{totalPrice}</p>

        <button
          onClick={handleOrder}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Place Order on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
