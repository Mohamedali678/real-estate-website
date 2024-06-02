function Header(){
    
    return <div>
        <div
      class="bg-[#151D31] py-10 flex items-center justify-between px-10 sm:px-28 text-white"
    >
      <h1 class="text-3xl font-semibold">BNGOON</h1>
      <i class="fa-solid fa-bars text-4xl sm:hidden"></i>
      <ul class="sm:flex hidden gap-10 text-[20px]">
        <li class="bg-[#364364] py-1 px-2 rounded">Home</li>
        <li>About Us</li>
        <li>Property</li>
        <li>Service</li>
        <li>Agent</li>
        <li>Contact Us</li>
      </ul>
      <button
        class="bg-[#FFD278] hidden sm:block px-5 py-3 rounded text-[18px]"
      >
        Schedule a visit
      </button>
    </div>
    </div>
}

export default Header