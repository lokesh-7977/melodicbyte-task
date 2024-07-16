"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { bookings } from "@/data/index";

const BookingSection = () => {
  const [selectedTab, setSelectedTab] = useState('pending');

  const handleTabClick = (tab:any) => {
    setSelectedTab(tab);
  };

  const filteredBookings = bookings.filter(booking => {
    if (selectedTab === 'pending') {
      return booking.status === 'pending';
    }
    if (selectedTab === 'today') {
      const today = new Date().toISOString().split('T')[0];
      return booking.date === today;
    }
    return true;
  });

  return (
    <div className="flex flex-col h-screen p-6 bg-blue-100 rounded-[23px]">
      <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
      <div className="flex space-x-2 mb-4 bg-white rounded-3xl w-fit">
        <button
          className={`px-10 py-2 rounded-3xl ${selectedTab === 'pending' ? 'bg-[#44B3E7] text-white' : ''}`}
          onClick={() => handleTabClick('pending')}
        >
          Pending
        </button>
        <button
          className={`px-4 py-2 rounded-3xl ${selectedTab === 'today' ? 'bg-[#44B3E7] text-white' : ''}`}
          onClick={() => handleTabClick('today')}
        >
          Today (16)
        </button>
      </div>
      <p className="mb-4 text-[#08138C] font-Montserrat">You’ve 30 pending bookings.</p>
      <div className="flex-1 overflow-y-auto pr-2">
        {filteredBookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-3xl shadow-md p-4 mb-4">
            <div className="flex items-center mb-4">
              <Image src="/assets/avatar.png" alt="Avatar" width={45} height={45} />
              <div className="ml-4 bg-[#DAE5F5] rounded-full px-5 py-2">
                <h3 className="font-semibold">{booking.name}</h3>
                <p className="text-gray-500">Standard Consultation</p>
              </div>
              <span className="ml-auto bg-blue-500 text-white px-3 py-1 rounded-full">#{booking.id}</span>
            </div>
            <div className="grid grid-cols-2 mb-4">
              <p className='border-b-2 pb-2 border-blue-500'><strong>Pet:</strong><br /> {booking.petType}</p>
              <p className='border-l-2 ml-2 border-blue-500'><strong>Pet Name:</strong><br /> {booking.petName}</p>
              <p className='border-r-2 mt-2 border-blue-500'><strong>Date:</strong><br /> {booking.date}</p>
              <p className='border-t-2 mt-1 ml-2 border-blue-500'><strong>Time:</strong><br /> {booking.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSection;
