"use client";
import React, { useState } from "react";
import Image from "next/image";
import { bookings } from "@/data/index";
import Link from "next/link";

const BookingSection = () => {
  const [selectedTab, setSelectedTab] = useState("pending");

  const handleTabClick = (tab : any) => {
    setSelectedTab(tab);
  };

  const filteredBookings = bookings.filter((booking) => {
    if (selectedTab === "pending") {
      return booking.status === "pending";
    }
    if (selectedTab === "today") {
      const today = new Date().toISOString().split("T")[0];
      return booking.date === today;
    }
    return true;
  });

  return (
    <div className="flex flex-col h-screen p-6 bg-blue-100 rounded-[23px]">
      <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
      <div className="flex space-x-2 mb-4 bg-white rounded-3xl w-fit">
        <button
          className={`px-10 py-2 rounded-3xl ${
            selectedTab === "pending" ? "bg-[#44B3E7] text-white" : ""
          }`}
          onClick={() => handleTabClick("pending")}
        >
          Pending
        </button>
        <button
          className={`px-4 py-2 rounded-3xl ${
            selectedTab === "today" ? "bg-[#44B3E7] text-white" : ""
          }`}
          onClick={() => handleTabClick("today")}
        >
          Today (16)
        </button>
      </div>
      <p className="mb-4 text-[#08138C] font-Montserrat">
        You&apos;ve 30 pending bookings.
      </p>
      <div className="flex-1 w-full items-center overflow-y-auto pr-3">
        {filteredBookings.map((booking) => (
          <div
            key={booking.id}
            className="mb-3 rounded-3xl overflow-hidden shadow-lg bg-white"
          >
            <div className="relative z-50 -mb-5 rounded-3xl overflow-hidden shadow-lg bg-white">
              <div className="px-4 py-4 md:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center bg-[#DAE5F5] rounded-[47px] pr-5 py-2 pl-2">
                      <Image
                        src="/assets/avatar.png"
                        alt="avatar"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div className="ml-3">
                        <h2 className="text-lg font-bold">{booking.name}</h2>
                        <p className="text-sm text-gray-500">
                          Standard Consultation
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-block -mr-7 z-50">
                    <Image
                      src="/assets/id.svg"
                      alt="Description"
                      width={78}
                      height={31}
                      className="w-full h-auto"
                    />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                      {booking.id}
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-6 pt-4 pb-2">
                <div className="flex items-center mb-3">
                  <Image
                    src="/assets/dog.svg"
                    alt="dog"
                    width={20}
                    height={20}
                  />
                  <p className="ml-2 text-gray-700">Pet: {booking.name}</p>
                </div>
                <div className="flex items-center mb-3">
                  <Image
                    src="/assets/dog.svg"
                    alt="pet name"
                    width={20}
                    height={20}
                  />
                  <p className="ml-2 text-gray-700">
                    Pet Name: {booking.petName}
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <Image
                    src="/assets/calendar.svg"
                    alt="date"
                    width={20}
                    height={20}
                  />
                  <p className="ml-2 text-gray-700">Date: {booking.date}</p>
                </div>
                <div className="flex items-center mb-3">
                  <Image
                    src="/assets/clock.svg"
                    alt="time"
                    width={20}
                    height={20}
                  />
                  <p className="ml-2 text-gray-700">Time: {booking.time}</p>
                </div>
              </div>
            </div>
            <div className="px-4 py-4 md:px-6 bg-[#08138C] rounded-b-3xl pt-10 flex items-center justify-between">
              <span className="text-white text-sm">PENDING</span>
              <Link href="/details" className="text-white text-sm font-semibold">
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSection;
