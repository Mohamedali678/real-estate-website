import { useState } from "react"

function Header(){


  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
    
    return <div>
        <div
      class="bg-[#151D31] py-10 flex sm:flex-row flex-col items-start sm:items-center justify-between px-10 sm:px-28 text-white"
    >
      <h1 class="text-3xl font-semibold">BNGOON</h1>

      <i onClick={handleOpen} style={{display: isOpen === true ? "none": ""}} class="fa-solid fa-bars text-4xl block sm:hidden absolute right-3"></i>
      <i onClick={handleClose} style={{display: isOpen === true ? "block": "none"}} class="fa-solid fa-x text-4xl hidden absolute right-3"></i>
      
      <ul style={{display: isOpen === true ? "flex": ""}} class="hidden sm:flex sm:flex-row  mt-10 sm:mt-0 transition-all duration-1000 flex-col  sm:gap-10 gap-6 text-[20px]">
        <li class="bg-[#364364] py-1 px-2 rounded">Home</li>
        <li>About Us</li>
        <li>Property</li>
        <li>Service</li>
        <li>Agent</li>
        <li>Contact Us</li>
      </ul>
      <button style={{display: isOpen === true ? "block": ""}}
        class="bg-[#FFD278] mt-6 sm:mt-0 hidden  sm:block sm:px-5 px-10 text-black font-bold py-3 rounded text-[18px]"
      >
        Schedule a visit
      </button>
    </div>
    </div>
}

export default Header