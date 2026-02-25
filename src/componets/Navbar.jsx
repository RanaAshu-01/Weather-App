import { useState } from "react"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black/70 backdrop-blur-md text-white px-6 py-4">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          🌤 Weather App
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li className="cursor-pointer hover:text-amber-400">Home</li>
          <li className="cursor-pointer hover:text-amber-400">About</li>
          <li className="cursor-pointer hover:text-amber-400">Contact</li>
        </ul>

        {/* Mobile Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden font-medium">
          <li className="cursor-pointer hover:text-amber-400">Home</li>
          <li className="cursor-pointer hover:text-amber-400">About</li>
          <li className="cursor-pointer hover:text-amber-400">Contact</li>
        </ul>
      )}

    </nav>


       
    )
}

export default Navbar
