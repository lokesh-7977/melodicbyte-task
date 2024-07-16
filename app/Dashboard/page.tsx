import AnalysisChart from '../AnalysisChart/page';
import Image from 'next/image';
import { MdNotifications } from 'react-icons/md';
import Booking from '../Booking/page';
import Navbar from '../Navbar/page';

const Dashboard = () => {
  return (
    <div className="p-6 min-h-screen bg-[#F0F2FE]">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
        <Navbar />
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="lg:w-[60%] w-full">
            <Image
              src="/assets/banner.svg"
              alt="banner"
              width={993}
              height={238}
              className="mb-7 w-full"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnalysisChart title="Bookings Analysis" />
              <AnalysisChart title="Sales Analysis" />
            </div>
          </div>
          <div className="w-full lg:w-[35%]">
            <Booking />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
