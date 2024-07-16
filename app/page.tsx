import Image from "next/image";
import Sidebar from "./Sidebar/page";
import Dashboard from "./Dashboard/page";

export default function Home() {
  return (
     <>
     <div className='flex bg-[#F0F2FE]'>
      <Sidebar />
      <div className='flex-grow'>
        <Dashboard />
      </div>
    </div>
     </>
  );
}
