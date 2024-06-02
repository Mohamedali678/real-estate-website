function Footer (){

    return <div>
          <div class="sm:px-28 px-10 sm:h-[400px] py-20 sm:py-0 text-white bg-black">
      <div
        class="text-white flex sm:flex-row flex-col py-20 gap-10 justify-center"
      >
        <div class="sm:w-[400px]">
          <h1 class="font-bold text-4xl mb-6">BGGOON</h1>
          <p>Copyright © 2023 Bangoonan</p>
          <p>Build by Mohamed</p>
        </div>
        <div class="sm:w-[400px]">
          <h1 class="font-bold mb-6 text-[20px]">About Us</h1>
          <p>
            Hac ullamcorper diam lacus eget amet penatibus. Consectetur non
            hendrerit vel amet in eu adipiscing scelerisque.
          </p>
        </div>
        <div class="w-[400px]">
          <h1 class="font-bold mb-6 text-[20px]">Locations</h1>
          <p>United States</p>
          <p>Australia</p>
          <p>United kingdom</p>
        </div>
        <div class="w-[400px]">
          <h1 class="font-bold mb-6 text-[20px]">Contacts</h1>
          <p>123 Main St. Anytown, USA</p>
          <p>+377 763 484</p>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="flex gap-5 flex-col sm:flex-row">
          <h1 class="text-2xl">Follow Us</h1>
          <div class="mt-2">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>

        <div>
          <span>Privacy</span>
          <span>terms</span>
        </div>
      </div>
    </div>
    </div>
}

export default Footer