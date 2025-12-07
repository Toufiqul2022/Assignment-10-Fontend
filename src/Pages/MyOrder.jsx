import axios from "axios";
import React, { useEffect, useState } from "react";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    axios
      .get("https://assignment-10-backend-dun.vercel.app/orders")
      .then((res) => {
        console.log(res.data);
        setMyOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-lg font-semibold">
            <tr>
              <th className="py-3 px-4 border-b">#</th>
              <th className="py-3 px-4 border-b">Buyer Name</th>
              <th className="py-3 px-4 border-b">Product Name</th>
              <th className="py-3 px-4 border-b">Price</th>
              <th className="py-3 px-4 border-b">Quantity</th>
              <th className="py-3 px-4 border-b">Address</th>
              <th className="py-3 px-4 border-b">Pickup Date</th>
              <th className="py-3 px-4 border-b">Phone</th>
            </tr>
          </thead>
          <tbody>
            {myOrder.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-500">
                  No orders found
                </td>
              </tr>
            ) : (
              myOrder.map((order, index) => (
                <tr
                  key={order._id}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <th className="py-3 px-4 border-b">{index + 1}</th>
                  <td className="py-3 px-4 border-b">{order.buyerName}</td>
                  <td className="py-3 px-4 border-b">{order.productName}</td>
                  <td className="py-3 px-4 border-b">${order.price}</td>
                  <td className="py-3 px-4 border-b">{order.quantity}</td>
                  <td className="py-3 px-4 border-b">{order.address}</td>
                  <td className="py-3 px-4 border-b">{order.pickupDate}</td>
                  <td className="py-3 px-4 border-b">{order.phone}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
