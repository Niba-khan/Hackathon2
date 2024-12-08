

export default function Navbars(){
    return(
    <header className="flex justify-between items-center px-8 py-4">
  <h1 className="text-lg font-bold">Bandage</h1>
  <nav className="flex space-x-4">
    <a href="/home" className="text-gray-500">Home</a>
    <a href="/productlist" className="text-gray-500">Product</a>
    <a href="/pricing" className="text-gray-500">Pricing</a>
    <a href="/contact" className="text-gray-500">Contact</a>
  </nav>
  <div className="flex space-x-4">
    <a href="#" className="text-blue-500">Login</a>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Become a member</button>
  </div>
</header>
)

}