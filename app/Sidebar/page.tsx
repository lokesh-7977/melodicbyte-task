"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = () => {
    setTargetReached(window.innerWidth <= width);
  };

  useEffect(() => {
    window.addEventListener('resize', updateTarget);
    updateTarget();
    return () => window.removeEventListener('resize', updateTarget);
  }, []);

  return targetReached;
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Dashboard");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSectionClick = (section: any) => {
    setSelectedSection(section);
  };

  const isSmallScreen = useMediaQuery(768);

  useEffect(() => {
    setIsCollapsed(isSmallScreen);
  }, [isSmallScreen]);

  return (
    <aside className={`bg-[#F0F2FE] p-3 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-80'} md:w-20 lg:w-80`}>
      <nav className='flex flex-col space-y-4 pt-10'>
        <div className="flex items-center">
          <Image src="/assets/logo.svg" alt="" width={40} height={50} />
          {!isCollapsed && (
            <span className="ml-1 text-[#2B307F] text-2xl font-bold w-full">
              Book <span className='text-[#3CA4DC] pl-1 w-full'>my Pet</span>
            </span>
          )}
          <button onClick={toggleSidebar} className="relative pl-5 -mr-16">
            <Image src="/assets/leftpannel.svg" alt="left" width={50} height={50} />
          </button>
        </div>

        <div className="flex flex-col h-[204px] my-5 gap-5 pl-2 text-[30px] font-Montserrat font-normal">
          <Link href="/">
            <div
              className={`flex items-center p-3 rounded-2xl font-normal border-b-black text-base ${
                selectedSection === 'Dashboard' ? 'bg-[#08138C] text-white' : 'text-[#7C82C5]'
              }`}
              onClick={() => handleSectionClick('Dashboard')}
            >
              <Image src={selectedSection === 'Dashboard' ? "/assets/dashboardwhite.svg" : "/assets/dashboard.svg"} alt="home" width={30} height={30} />
              {!isCollapsed && <span className="ml-5">Dashboard</span>}
            </div>
          </Link>
          <div
            className={`flex items-center p-3 rounded-2xl font-normal border-b-black text-base ${
              selectedSection === 'Calendar' ? 'bg-[#08138C] text-white' : 'text-[#7C82C5]'
            }`}
            onClick={() => handleSectionClick('Calendar')}
          >
            <Image src={selectedSection === 'Calendar' ? "/assets/calendarwhite.svg" : "/assets/calendar.svg"} alt="calendar" width={30} height={30} />
            {!isCollapsed && <span className="ml-5">Calendar</span>}
          </div>
          <div
            className={`flex items-center p-3 rounded-2xl font-normal border-b-black text-base ${
              selectedSection === 'Bookings' ? 'bg-[#08138C] text-white' : 'text-[#7C82C5]'
            }`}
            onClick={() => handleSectionClick('Bookings')}
          >
            <Image src={selectedSection === 'Bookings' ? "/assets/bookingwhite.svg" : "/assets/booking.svg"} alt="booking" width={30} height={30} />
            {!isCollapsed && <span className="ml-5">Bookings</span>}
          </div>
          <div
            className={`flex items-center p-3 rounded-2xl font-normal border-b-black text-base ${
              selectedSection === 'Facilities' ? 'bg-[#08138C] text-white' : 'text-[#7C82C5]'
            }`}
            onClick={() => handleSectionClick('Facilities')}
          >
            <Image src={selectedSection === 'Facilities' ? "/assets/faciltywhite.svg" : "/assets/facilty.svg"} alt="facilities" width={30} height={30} />
            {!isCollapsed && <span className="ml-5">Facilities</span>}
          </div>
          <div
            className={`flex items-center p-3 rounded-2xl font-normal border-b-black text-base ${
              selectedSection === 'Services' ? 'bg-[#08138C] text-white' : 'text-[#7C82C5]'
            }`}
            onClick={() => handleSectionClick('Services')}
          >
            <Image src={selectedSection === 'Services' ? "/assets/serviceswhite.svg" : "/assets/services.svg"} alt="services" width={30} height={30} />
            {!isCollapsed && <span className="ml-5">Services</span>}
          </div>
          <div
            className={`flex items-center p-3 rounded-2xl font-normal border-b-black text-base ${
              selectedSection === 'Customers' ? 'bg-[#08138C] text-white' : 'text-[#7C82C5]'
            }`}
            onClick={() => handleSectionClick('Customers')}
          >
            <Image src={selectedSection === 'Customers' ? "/assets/customerwhite.svg" : "/assets/customers.svg"} alt="customers" width={30} height={30} />
            {!isCollapsed && <span className="ml-5">Customers</span>}
          </div>
          <div
            className={`flex items-center p-3 rounded-2xl font-normal border-b-black text-base ${
              selectedSection === 'Staffs' ? 'bg-[#08138C] text-white' : 'text-[#7C82C5]'
            }`}
            onClick={() => handleSectionClick('Staffs')}
          >
            <Image src={selectedSection === 'Staffs' ? "/assets/staffswhite.svg" : "/assets/staffs.svg"} alt="staffs" width={30} height={30} />
            {!isCollapsed && <span className="ml-5">Staffs</span>}
          </div>
          <div
            className={`flex items-center p-3 rounded-2xl font-normal border-b-black text-base ${
              selectedSection === 'Rooms' ? 'bg-[#08138C] text-white' : 'text-[#7C82C5]'
            }`}
            onClick={() => handleSectionClick('Rooms')}
          >
            <Image src={selectedSection === 'Rooms' ? "/assets/roomswhite.svg" : "/assets/rooms.svg"} alt="rooms" width={30} height={30} />
            {!isCollapsed && <span className="ml-5">Rooms</span>}
          </div>
          <div
            className={`flex items-center p-3 rounded-2xl font-normal border-b-black text-base ${
              selectedSection === 'Addons' ? 'bg-[#08138C] text-white' : 'text-[#7C82C5]'
            }`}
            onClick={() => handleSectionClick('Addons')}
          >
            <Image src={selectedSection === 'Addons' ? "/assets/addonswhite.svg" : "/assets/addons.svg"} alt="addons" width={30} height={30} />
            {!isCollapsed && <span className="ml-5">Addons</span>}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
