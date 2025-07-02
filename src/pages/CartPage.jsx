// import { useCart } from "../context/CartContext";
// import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

// const CartPage = () => {
//   const { cartItems, increaseQty, decreaseQty, removeFromCart, totalPrice } =
//     useCart();

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold mb-8 text-center text-[#2D3B36]">
//         Your Cart
//       </h2>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="space-y-6">
//             {cartItems.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-md shadow-sm bg-white"
//               >
//                 {/* Image & Info */}
//                 <div className="flex items-center space-x-4 w-full md:w-2/3">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-24 h-24 object-cover rounded"
//                   />
//                   <div>
//                     <h3 className="text-lg font-semibold text-[#2D3B36]">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-500">${item.price.toFixed(2)}</p>
//                   </div>
//                 </div>

//                 {/* Quantity & Remove */}
//                 <div className="flex items-center space-x-4 mt-4 md:mt-0">
//                   <button
//                     onClick={() => decreaseQty(item.title)}
//                     className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
//                   >
//                     <FaMinus />
//                   </button>
//                   <span className="font-medium">{item.quantity}</span>
//                   <button
//                     onClick={() => increaseQty(item.title)}
//                     className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
//                   >
//                     <FaPlus />
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(item.title)}
//                     className="text-red-600 hover:text-red-800"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Total Amount */}
//           <div className="mt-10 text-right">
//             <h4 className="text-xl font-bold text-[#2D3B36]">
//               Total: ${totalPrice}
//             </h4>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;
