import React from 'react';

const Techbene = () => {
  return (
    <section className='my-14 px-4 sm:px-6 md:px-7 bg-black text-white'>
      <div className="parent w-full  flex-col lg:flex-row flex  justify-center">

        {/* Left Image Section */}
        <div className="left lg:w-[40%] w-[80%] h-full ">
          <img
            className='w-full h-full object-cover object-center'
            src="/pageimg/nobgGlass.png"
            alt="glasses"
          />
        </div>

        {/* Right Content Section */}
        <div className="right w-[100%] lg:w-[60%] h-full  flex flex-col justify-center px0 sm:px-10 py-6">

          <div className="flex sm:flex-row flex-col w-full border-b pb-12 mb-4 sm:gap-0 gap-10">
            {/* Technology Column */}
            <div className="w-full sm:w-1/2 pr-6">
              <h2 className="text-xl md:text-4xl font-semibold mb-7  bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">TECHNOLOGY</h2>
              <h3 className="text-xl md:text-2xl font-semibold">Digital Ray Path</h3>
              <p className="text-[0.9rem] md:text-lg text-gray-300 mt-2 leading-relaxed">
                With Digital Ray-Path®, each Single Vision lens is precisely calculated using real
                personalization parameters for optimal visual performance.
              </p>
            </div>

            {/* Benefits Column */}
            <div className="w-full sm:w-1/2 pl-0   sm:pl-6">
              <h2 className="text-3xl md:text-4xl font-semibold mb-7  pb-1 bg-yellow-400 text-black rounded-md pl-4">BENEFITS</h2>
              <ul className="list-none space-y-2 mt-4 text-[0.9rem] md:text-lg pl-4">
                <li className="flex items-start">
                  <span className="mr-2">■</span> DYNAMIC OPTICS
                </li>
                <li className="flex items-start">
                  <span className="mr-2">■</span> THINNER AND LIGHTER LENS
                </li>
                <li className="flex items-start">
                  <span className="mr-2">■</span> PRECISE POINT BY POINT CALCULATION
                </li>
                <li className="flex items-start">
                  <span className="mr-2">■</span> BETTER AESTHETICS
                </li>
                <li className="flex items-start">
                  <span className="mr-2">■</span> DIGITAL RELIEF
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Techbene;
