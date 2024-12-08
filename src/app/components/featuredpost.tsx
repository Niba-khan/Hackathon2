import Image from "next/image";
import { CiAlarmOn } from "react-icons/ci";
import { FaChartArea } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const FeaturedPosts = () => {
  // Array of card data
  const cardData = [
    {
      id: 1,
      image: "/images/post1.png",
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      tags: ["Google", "Trending", "New"],
    },
    {
      id: 2,
      image: "/images/post2.png",
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      tags: ["Google", "Trending", "New"],
    },
    {
      id: 3,
      image: "/images/post3.png",
      title: "Loudest à la Madison #1 (L'intégral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      tags: ["Google", "Trending", "New"],
    },
  ];

  return (
    <div className="w-full md:w-[1050px] mx-auto py-[60px] md:py-[112px]">
      {/* Centered Text Section */}
      <div className="flex flex-col justify-center items-center text-center mb-12">
        <h6 className="text-[#23A6F0] text-[14px] font-[700]">Practice Advice</h6>
        <h2 className="text-[#252B42] text-[30px] md:text-[40px] font-[700]">
          Featured Posts
        </h2>
        <p className="text-[#737373] text-[12px] md:text-[14px] font-[400] w-[90%] md:w-[469px]">
          Problems trying to resolve the conflict between the two major realms of
          Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Grid Section for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative">
              <Image
                src={card.image}
                alt={card.title}
                width={350}
                height={200}
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute top-2 left-2 bg-[#FF5A5F] text-white text-xs font-bold py-1 px-2 rounded">
                NEW
              </div>
            </div>
            {/* Text Section */}
            <div className="p-4">
              <div className="flex gap-2 mb-2 text-xs text-gray-500">
                {card.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <h3 className="text-base md:text-lg text-[#252B42] font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mb-4">
                {card.description}
              </p>
              {/* Footer Section */}
              <div className="flex justify-between items-center text-xs md:text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <CiAlarmOn color="#23A6F0" />
                  <span>{card.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaChartArea color="#23856D" />
                  <span>{card.comments}</span>
                </div>
              </div>
              <div className="mt-4 text-[#23A6F0] font-bold text-sm flex items-center gap-1">
                Learn More
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
