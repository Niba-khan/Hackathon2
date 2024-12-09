import Image from "next/image";

export default function Editors() {
  return (
    <div className="w-full flex justify-center py-[10px] bg-[#f5f5f5]">
      <div className="w-full max-w-[1050px] flex flex-col gap-[30px] bg-[#FAFAFA] p-[20px] md:p-[40px]">
    
        <div className="flex flex-col items-center gap-[10px]">
          <h3 className="font-Montserrat font-semibold text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-center">
            EDITORS PICK
          </h3>
          <p className="w-full max-w-[347px] font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>
        
        <div className="w-full flex flex-col md:flex-row gap-[20px] md:gap-[30px]">
        
          <div className="relative w-full md:w-[510px] h-[300px] md:h-[500px]">
            <Image
              src="/images/editorpick1.png"
              alt="men"
              width={509}
              height={500}
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] py-[8px] shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] md:text-[16px] hover:bg-gray-100">
              MEN
            </button>
          </div>
          
          <div className="relative w-full md:w-[240px] h-[300px] md:h-[500px]">
            <Image
              src="/images/editorpick2.png"
              alt="women"
              width={509}
              height={500}
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-[10px] left-[20px] bg-white px-[20px] py-[8px] shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] md:text-[16px] hover:bg-gray-100">
              WOMEN
            </button>
          </div>
         
          <div className="w-full md:w-[240px] flex flex-col gap-[20px] md:gap-[30px]">
           
            <div className="relative w-full h-[150px] md:h-[242px]">
              <Image
                src="/images/editorpick3.png"
                alt="accessories"
                width={239}
                height={242}
                className="w-full h-full object-cover rounded-md"
              />
              <button className="absolute bottom-[10px] left-[20px] bg-white px-[20px] py-[8px] shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] md:text-[16px] hover:bg-gray-100">
                ACCESSORIES
              </button>
            </div>
            {/* Kids Image */}
            <div className="relative w-full h-[150px] md:h-[242px]">
              <Image
                src="/images/editorpick4.png"
                alt="kids"
                width={239}
                height={242}
                className="w-full h-full object-cover rounded-md"
              />
              <button className="absolute bottom-[10px] left-[20px] bg-white px-[20px] py-[8px] shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] md:text-[16px] hover:bg-gray-100">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
