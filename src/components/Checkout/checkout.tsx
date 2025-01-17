"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { removeFromCart, updateQuantity, clearCart } from '@/store/slices/cartSlice';
import { Button, Divider } from '@nextui-org/react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';
import { josefin } from '@/utils/font';
import { getValidImageUrl } from '@/utils/imageUtils';

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ _id: id, quantity }));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart({ _id: id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className={`${josefin.className} text-3xl font-bold mb-8`}>Checkout</h1>

      {/* Cart Items */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item._id} className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6">
                  {/* Product Image */}
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={getValidImageUrl(Array.isArray(item.img) ? item.img[0] : item.img)}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-image.jpg';
                      }}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-600 text-justify my-2">
                      {item.description ? `${item.description.slice(0, 100)}...` : 'No description available'}
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      {item.faces && <span>Faces: {item.faces}</span>}
                      {item.country && <span>• Country: {item.country}</span>}
                      {item.size && <span>• Size: {item.size}</span>}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <Button
                      isIconOnly
                      variant="flat"
                      size="sm"
                      onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <FaMinus className="h-3 w-3" />
                    </Button>
                    <div className="rounded-md w-10 h-10 flex items-center justify-center bg-gray-200">
                      <p className="text-sm font-bold">{item.quantity}</p>
                    </div>
                    <Button
                      isIconOnly
                      variant="flat"
                      size="sm"
                      onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                    >
                      <FaPlus className="h-3 w-3" />
                    </Button>
                  </div>

                  {/* Price and Remove Button */}
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    <Button
                      isIconOnly
                      variant="light"
                      color="danger"
                      onClick={() => handleRemoveItem(item._id)}
                    >
                      <FaTrash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button
                color="danger"
                variant="flat"
                onClick={handleClearCart}
                className="w-full sm:w-auto"
              >
                Clear Cart
              </Button>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className={`${josefin.className} text-xl font-bold mb-4`}>Order Summary</h2>
          <Divider className="my-4" />
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-semibold">${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Shipping</p>
              <p className="font-semibold">Free</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Tax</p>
              <p className="font-semibold">$0.00</p>
            </div>
            <Divider className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
            </div>
            <Button
              color="primary"
              className="w-full mt-6"
              disabled={cartItems.length === 0}
            >
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;