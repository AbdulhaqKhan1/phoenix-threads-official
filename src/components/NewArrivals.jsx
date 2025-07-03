import { products } from '../data/products';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewArrivals = () => {
  const navigate = useNavigate();

  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products
          .filter(p => p.category === 'new')
          .map(item => (
            <div
              key={item.id}
              onClick={() => navigate(`/order/${item.id}`)}
              className="cursor-pointer bg-white p-4 rounded shadow transform transition-transform duration-300 hover:-translate-y-[5px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-contain"
              />
              <h3 className="mt-2 text-center">{item.name}</h3>
            </div>
          ))}
      </div>
    </section>
  );
};

export default NewArrivals;
