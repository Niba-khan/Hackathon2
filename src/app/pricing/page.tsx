import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar2 from "../components/navbar2";

export default function Pricing() {
  return (
    <div>
      <Navbar2 />
      <div className="bg-[#FAFAFA] text-center mb-20 py-[50px] gap-[16px] px-4 sm:px-10 lg:px-36">
        <h5 className="text-[16px] text-[#737373] font-[700] pb-8">PRICING</h5>
        <h1 className="text-[#252B42] text-[32px] sm:text-[40px] lg:text-[58px] font-[700]">Simple Pricing</h1>
        <nav className="flex justify-center">
          <a href="/" className="text-[#252B42] text-[14px] font-[700]">Home</a>
          <MdOutlineArrowForwardIos className="mx-2 text-[#BDBDBD]" />
          <a href="/shop" className="text-[#BDBDBD] text-[14px] font-[#BDBDBD]">Pricing</a>
        </nav>

        <div className="w-full h-auto flex flex-wrap justify-center mt-12 gap-8">
          {/* FREE card */}
          <div className="w-full sm:w-[327px] lg:w-[327px] bg-[#FFFFFF] rounded-lg shadow-lg px-[20px] sm:px-[40px] py-[30px] sm:py-[50px] gap-[35px]">
            <h3 className="text-[20px] sm:text-[24px] font-[700] text-center text-[#252B42] mb-4">FREE</h3>
            <h5 className="text-center text-[#737373] text-[14px] sm:text-[16px] font-[700] mb-4">Organize across all apps by hand</h5>
            <div className="flex items-center justify-center mt-4">
              <h2 className="text-[32px] sm:text-[40px] text-center text-[#23A6F0] font-[700] mb-4">0</h2>
              <Image src="/images/div.png" alt="dollar" width={56} height={42} />
            </div>
            <ul className="mt-6 space-y-3 text-[#252B42] text-[14px] sm:text-[16px] font-[700]">
              <li className="flex items-center ">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product update</h6>
              </li>
              <li className="flex items-center">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product updates</h6>
              </li>
              <li className="flex items-center ">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product updates</h6>
              </li>
              <li className="flex items-center ">
                <FaCheckCircle color="#BDBDBD" size={24} />
                <h6 className="ml-2">1GB Cloud storage</h6>
              </li>
              <li className="flex items-center">
                <FaCheckCircle color="#BDBDBD" size={24} />
                <h6 className="mr-6">Email and community support</h6>
              </li>
            </ul>
            <div className="flex justify-center mt-8">
              <button className="w-[200px] sm:w-[246px] h-[40px] sm:h-[52px] bg-[#252B42] text-white px-[20px] sm:px-[40px] py-[12px] sm:py-[15px] text-[14px] font-[700]">Try for free</button>
            </div>
          </div>

          {/* STANDARD card */}
          <div className="w-full sm:w-[329px] lg:w-[329px] h-auto bg-[#252B42] text-white rounded-lg shadow-lg p-6">
            <h3 className="text-[20px] sm:text-[24px] font-[700] text-center mb-4 sm:mb-8">STANDARD</h3>
            <h5 className="text-center text-[14px] sm:text-[16px] font-[700] mb-8">Organize across all apps by hand</h5>
            <div className="flex items-center justify-center mt-8">
              <h2 className="text-[32px] sm:text-[40px] text-center text-[#23A6F0] font-[700] mb-4">9.99</h2>
              <Image src="/images/div.png" alt="dollar" width={56} height={42} />
            </div>
            <ul className="mt-6 space-y-3 text-[#FFFFFF] text-[14px] sm:text-[16px] font-[700]">
              <li className="flex items-center ">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product update</h6>
              </li>
              <li className="flex items-center">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product updates</h6>
              </li>
              <li className="flex items-center ">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product updates</h6>
              </li>
              <li className="flex items-center ">
                <FaCheckCircle color="#BDBDBD" size={24} />
                <h6 className="ml-2">1GB Cloud storage</h6>
              </li>
              <li className="flex items-center">
                <FaCheckCircle color="#BDBDBD" size={24} />
                <h6 className="mr-6">Email and community support</h6>
              </li>
            </ul>
            <div className="flex justify-center mt-8">
              <button className="w-[200px] sm:w-[246px] h-[40px] sm:h-[52px] bg-[#23A6F0] text-white px-[20px] sm:px-[40px] py-[12px] sm:py-[15px] text-[14px] font-[700]">Try for free</button>
            </div>
          </div>

          {/* PREMIUM card */}
          <div className="w-full sm:w-[327px] lg:w-[327px] bg-[#FFFFFF] text-[#FFFFFF] rounded-lg shadow-lg p-6">
            <h3 className="text-[20px] sm:text-[24px] font-[700] text-center text-[#252B42] mb-4 sm:mb-8">PREMIUM</h3>
            <h5 className="text-center text-[#737373] text-[14px] sm:text-[16px] font-[700] mb-8">Organize across all apps by hand</h5>
            <div className="flex items-center justify-center mt-4">
              <h2 className="text-[32px] sm:text-[40px] text-center text-[#23A6F0] font-[700] mb-8">19.99</h2>
              <Image src="/images/div.png" alt="dollar" width={56} height={42} />
            </div>
            <ul className="mt-6 space-y-3 text-[#252B42] text-[14px] sm:text-[16px] font-[700]">
              <li className="flex items-center ">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product update</h6>
              </li>
              <li className="flex items-center">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product updates</h6>
              </li>
              <li className="flex items-center ">
                <FaCheckCircle color="#2DC071" size={24} />
                <h6 className="ml-2">Unlimited product updates</h6>
              </li>
              <li className="flex items-center ">
                <FaCheckCircle color="#BDBDBD" size={24} />
                <h6 className="ml-2">1GB Cloud storage</h6>
              </li>
              <li className="flex items-center">
                <FaCheckCircle color="#BDBDBD" size={24} />
                <h6 className="mr-6">Email and community support</h6>
              </li>
            </ul>
            <div className="flex justify-center mt-8">
              <button className="w-[200px] sm:w-[246px] h-[40px] sm:h-[52px] bg-[#23A6F0] text-white px-[20px] sm:px-[40px] py-[12px] sm:py-[15px] text-[14px] font-[700]">Try for free</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
