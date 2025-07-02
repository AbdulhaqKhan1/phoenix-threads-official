// import React from 'react'
// import { useState } from 'react';
// import { products } from '../data/products';

// const ProductSlider = () => {
//   return (
//     <div className="relative flex items-center justify-center h-[500px] overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={products[index].id}
//           src={products[index].image}
//           alt={products[index].name}
//           className="absolute w-[300px] h-[400px] object-contain"
//           initial={{ x: 300, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: -300, opacity: 0 }}
//           transition={{ duration: 0.4 }}
//         />
//       </AnimatePresence>
//       <button onClick={() => swipe('left')} className="absolute left-5 bg-black/50 text-white p-2 rounded">◀</button>
//       <button onClick={() => swipe('right')} className="absolute right-5 bg-black/50 text-white p-2 rounded">▶</button>
//     </div>

//   )
// }

// export default ProductSlider