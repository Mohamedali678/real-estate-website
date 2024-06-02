function Hero (){

    return <div>
         <div
      class="bg-[#FFD278] mb-20 sm:h-[720px] px-10 sm:px-28 py-20 flex sm:flex-row flex-col justify-between"
    >
      <div class="sm:w-[600px]">
        <p>Bangoonan Real Estate Agent</p>
        <h1 class="sm:text-7xl text-5xl font-bold leading-[50px] sm:leading-[90px] mb-3">
          Find Your Dream Home Today
        </h1>
        <p>
          Are you ready to start the search for your dream home? Look no further
          than Bangoonan Real Estate.
        </p>
        <button
          class="bg-[#151D31] text-white px-8 text-2xl mt-10 rounded py-3"
        >
          Explore More
        </button>
      </div>

      <form
        class="sm:w-[400px] pr-4 sm:pr-0 mt-10 sm:mt-0 sm:h-[550px] px-6 sm:pl-10 py-4 rounded-xl bg-white"
      >
        <h1 class="font-bold text-1xl sm:text-2xl mb-2">
          Real Estate Iquiry Form
        </h1>
        <p class="text-gray-400 mb-4">
          Please provide the following information to help us better understand
          your real estate needs.
        </p>
        <label class="font-semibold text-2xl">Yuor information</label>
        <br />
        <input
          class="h-[50px] border rounded my-2 w-full border-black sm:w-[320px]"
          type="text"
          placeholder="Enter your name"
        />
        <br />
        <input
          class="h-[50px] border rounded my-2 border-black w-full sm:w-[320px]"
          type="email"
          placeholder="Enter your email"
        />
        <br />
        <label class="font-semibold text-2xl">Your preferences</label>
        <select
          class="h-[50px] border rounded my-2 border-black w-full sm:w-[320px]"
        >
          <option>Type of Property you're interested in</option>
        </select>
        <select
          class="h-[50px] border rounded my-2 border-black w-full sm:w-[320px]"
        >
          <option>What is your preferred location?</option>
        </select>
        <select
          class="h-[50px] border rounded my-2 border-black w-full sm:w-[320px]"
        >
          <option>What is your budget?</option>
        </select>
      </form>
    </div>
    </div>
}

export default Hero