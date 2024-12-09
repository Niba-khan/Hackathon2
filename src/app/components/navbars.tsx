import Link from "next/link"

export default function Navbars(){
    return(
    <div className="flex justify-between items-center px-8 py-4">
  <h1 className="text-lg font-bold">Bandage</h1>
  <nav className="flex space-x-4 text-[#737373] text-[14px]">
  <Link href="/" className="hover:text-blue-700">
          home
        </Link>
        <Link href="/product" className="hover:text-blue-700">
         product
        </Link>
        <Link href="/pricing" className="hover:text-blue-700">
          pricing
        </Link>
        <Link href="/contact" className="hover:text-blue-700">
          contact
          </Link>
  </nav>
  <div className="flex gap-[45px]">
    <a href="#" className="text-[#23A6F0]">Login</a>
    <button className="bg-[#23A6F0] text-white px-4 py-2 rounded">Become a member</button>
  </div>
  </div>
)

}