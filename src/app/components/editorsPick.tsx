import Image from "next/image";

export default function EditorsPick() {
  return (
    <section className="bg-[#FAFAFA] h-auto py-8 relative mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-[24px] lg:text-[32px] font-bold">EDITOR'S PICK</h2>
        <p className="text-gray-500">Problems trying to resolve the conflict between</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mx-auto relative z-10">
        {/* Men (Large Image) */}
        <div className="relative col-span-1 sm:col-span-2 md:col-span-2">
          <Image
            src="/images/editorpick1.png"
            alt="Men"
            width={510}
            height={500}
            className="object-cover w-full h-full"
          />
          <div className="absolute w-[170px] h-[48px] bottom-4 left-4 bg-white px-4 py-2 text-black font-bold">
            Men
          </div>
        </div>

        {/* Women */}
        <div className="relative col-span-1">
          <Image
            src="/images/editorpick2.png"
            alt="Women"
            width={240}
            height={500}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-bold">
            Women
          </div>
        </div>

        {/* Accessories */}
        <div className="relative col-span-1">
          <Image
            src="/images/editorpick3.png"
            alt="Accessories"
            width={240}
            height={242}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-bold">
            Accessories
          </div>
        </div>

        {/* Kids (Below Accessories) */}
        <div className="relative col-span-1">
          <Image
            src="/images/editorpick4.png"
            alt="Kids"
            width={240}
            height={242}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-bold">
            Kids
          </div>
        </div>
      </div>
    </section>
  );
}
