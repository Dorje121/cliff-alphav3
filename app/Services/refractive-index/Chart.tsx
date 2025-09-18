import React from 'react'

const Chart = () => {
    return (
        <>
            <section className='px-7'>
                <div className="head">
                    <h2 className=" text-center mb-2 md:text-left mt-20 text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold   !bg-gradient-to-r !from-white !via-yellow-100 !to-yellow-200 !bg-clip-text !text-transparent px-2">
                        Lens Index <span className="text-yellow-400">Chart </span>
                    </h2>
                    <p className='pl-2 w-full md:w-[60%] text-center md:text-left text-gray-300 mb-4 text-[1.1rem] sm:text-[1.4rem]'> {` High-index lenses primarily reduce the peripheral thickness in concave (minus power) lenses and the central thickness in convex (plus power) lenses.`}</p>
                </div>

                <div className="parent border  w-full flex justify-between items-center flex-wrap">
                    <div className="box1 bg-amber-300 w-[40%] h-[300px] "></div>
                    <div className="box2 bg-amber-900 w-[40%] h-[300px]"></div>
                    <div className="box3 bg-blue-700 w-[40%] h-[300px]"></div>
                    <div className="box4 bg-blue-900 w-[40%] h-[300px]"></div>
                </div>
            </section>
        </>
    )
}

export default Chart