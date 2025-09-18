import React from 'react'

const diff = () => {
    return (
        <>

            < section className=' my-28  ' >
                <div className="parent w-full flex flex-col sm:flex-row sm:gap-0 gap-7 justify-between items-center">
                    <div className='left  border-1 border-zinc-700 w-[100%] sm:w-[49%] rounded-b-2xl overflow-hidden'>
                        <div className="  h-[330px] md:h-[450px] w-full  overflow-hidden">
                            <img className='w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out hover:scale-110' src="/pageimg/traditional.png" alt=" traditional lens" />
                        </div>
                        <div className="bottom h-[70px] sm:h-[50px] w-full]  bg-[#0C0F14] text-[1.3em] md:text-2xl text-center flex justify-center items-center">
                            Traditional Progressive
                        </div>
                    </div>

                    <div className="right border-1 border-zinc-700  w-[100%] sm:w-[49%] rounded-b-2xl overflow-hidden">
                        <div className=" h-[330px] md:h-[450px] w-full overflow-hidden">
                            <img className='w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out hover:scale-110' src="/pageimg/cliffdya.png" alt="dyanamic cliff" />
                        </div>
                        <div className="bottom h-[70px] sm:h-[50px] w-full] bg-[#0C0F14] text-[1.3em] md:text-2xl text-center flex justify-center items-center">
                            Cliff Dynamic Progressive
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default diff