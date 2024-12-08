import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Product from "../components/product";

export default function ProductList() {
    const categories = [
      { id: "1", name: "CLOTHS", itemsCount: 5, imageUrl: "/images/cloth1.png" },
      { id: "2", name: "CLOTHS", itemsCount: 5, imageUrl: "/images/cloth2.png" },
      { id: "3", name: "CLOTHS", itemsCount: 5, imageUrl: "/images/cloth3.png" },
      { id: "4", name: "CLOTHS", itemsCount: 5, imageUrl: "/images/cloth4.png" },
      { id: "4", name: "CLOTHS", itemsCount: 5, imageUrl: "/images/cloth5.png" }
    ];
  
    return (
      <div>
     <Header/>
        <Navbar/>
      <div className="w-[1440px] h-[92px] bg-[#FAFAFA]  mb-9">
        <header className="py-4 px-6">
          <div className="container mx-auto flex justify-between items-center">
            <h3 className="text-[24px] font-[700]">Shop</h3>
            <nav className="flex items-center">
  <a href="/" className="text-black font-[14px]">Home</a>
  <MdOutlineArrowForwardIos className="mx-2 text-[#BDBDBD]" />
  <a href="/shop" className="text-[#BDBDBD] text-[14px] font-[#BDBDBD]">Shop</a>
</nav>

          </div>
        </header>
  
        <section className="py-6 w-[1440px] h-[271px] bg-[#FAFAFA] px-40 ">
          <div className="container mx-auto flex space-x-4 overflow-x-auto">
            {categories.map((category) => (
              <div key={category.id} className="min-w-[200px] relative group">
                <Image
                  src={category.imageUrl}
                  alt={`Category ${category.id}`}
                  width={206}
                  height={223}
                  className="w-full h-auto rounded"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h5 className="text-[16px] font-[700]">{category.name}</h5>
                  <p>{category.itemsCount} Items</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="container w-[1440px] h-[98px] mx-auto gap-10 flex justify-between items-center py-6 mt-60 text-[#737373] text-[14px]">
        <p>Showing all 12 results</p>
        <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-4 pr-64">
  <h6 className="text-[14px] font-[700] text-[#737373]">Views:</h6>
  <Image 
    src="/images/icon1.png"
    alt="icon1"
    width={46}
    height={46}
  />
  <Image 
    src="/images/icon2.png"
    alt="icon2"
    width={46}
    height={46}
  />
</div>

  <select className="border p-2">
            <option>Popularity</option>
            <option>Price</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Filter</button>
        </div>
      </div>

      <div className="w-[1440px] h-[175px] mx-auto pr-40 py-[50px] bg-[#F7F7F7] flex items-center ">
    {/* Logos */}
    <div className="flex ml-auto gap-20 items-center">
        <Image
            src="/images/logo1.png"
            alt="Logo 1"
            width={153}
            height={34}
        />
        <Image
            src="/images/logo2.png"
            alt="Logo 2"
            width={123.8}
            height={38.52}
        />
        <Image
            src="/images/logo3.png"
            alt="Logo 3"
            width={123.8}
            height={38.52}
        />
        <Image
            src="/images/logo4.png"
            alt="Logo 4"
            width={123.8}
            height={38.52}
        />
        <Image
            src="/images/logo5.png"
            alt="Logo 5"
            width={123.8}
            height={38.52}
        />
        <Image
            src="/images/logo6.png"
            alt="Logo 6"
            width={123.8}
            height={38.52}
        />
    </div>
</div>
<Footer/>
<Product/>
<div className="flex justify-center items-center border-[1.35px] border-r-[1px] border-[#BDBDBD] w-[313px] h-[74px] mx-auto">
  <button className="px-6 py-6 rounded bg-[#F3F3F3] border-r-[1px] border-[#BDBDBD]">First</button>
  <button className="px-6 py-6 rounded bg-[#23A6F0] text-white border-r-[1px] border-[#BDBDBD]">1</button>
  <button className="px-6 py-6 rounded bg-[#FFFFFF] border-r-[1px] border-[#BDBDBD]">2</button>
  <button className="px-6 py-6 rounded bg-[#FFFFFF] border-r-[1px] border-[#BDBDBD]">3</button>
  <button className="px-6 py-6 rounded bg-[#FFFFFF]">Next</button>
</div>




      </div>
     
    );
  }
  