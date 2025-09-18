import React from 'react'

const Chart = () => {
    return (
        <>
            <section className='px-4 sm:px-7'>
                <div className="head">
                    <h2 className=" text-center mb-2 md:text-left mt-20 text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold   !bg-gradient-to-r !from-white !via-yellow-100 !to-yellow-200 !bg-clip-text !text-transparent px-2">
                        Lens Index <span className="text-yellow-400">Chart </span>
                    </h2>
                    <p className='pl-2 w-full md:w-[60%] text-center md:text-left text-gray-300 mb-4 text-[1.1rem] sm:text-[1.4rem]'>
                        {` High-index lenses primarily reduce the peripheral thickness in concave (minus power) lenses and the central thickness in convex (plus power) lenses.`}
                    </p>
                </div>

                {/* Low Index Section */}
                <div className="contain my-32">
                    <h2 className=" text-4xl sm:text-6xl font-bold text-center mb-6 md:mb-10 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent px-2">
                        Low Index
                    </h2>
                    <div className="parent w-full flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 flex-wrap">
                        <div className="box1 flex flex-col justify-between items-center bg-[#1D1D1F] w-full sm:w-[48.5%] h-[450px] p-4 rounded-md">
                            <div className="img w-full mx-auto h-[200px] mb-10">
                                <img className='w-full h-full object-cover object-center' src="/pageimg/nobgindex1.png" alt="clifflens" />
                            </div>
                            <div className="h-[200px] info flex flex-col justify-center items-center gap-4">
                                <h2 className='text-center text-white text-4xl font-bold'>{`Low Index (Concave)`}</h2>
                                <p className='text-center text-gray-500 text-xl'>
                                    Thicker at the edges, used for minus (nearsighted) prescriptions. Bulkier and heavier.
                                </p>
                            </div>
                        </div>

                        <div className="box2 flex flex-col justify-between items-center bg-[#1D1D1F] w-full sm:w-[48.5%] h-[450px] p-4 rounded-md">
                            <div className="img w-full mx-auto h-[200px] mb-10">
                                <img className='w-full h-full object-cover object-center' src="/pageimg/nobgindex2.png" alt="clifflens" />
                            </div>
                            <div className="h-[200px] info flex flex-col justify-center items-center gap-4">
                                <h2 className='text-center text-white text-4xl font-bold'>{`Low Index (Convex)`}</h2>
                                <p className='text-center text-gray-500 text-xl'>
                                    Thicker at the center, used for plus (farsighted) prescriptions. Can look bulky.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* High Index Section */}
                <div className="contain my-16 sm:mt-52">
                    <h2 className="text-4xl sm:text-6xl font-bold text-center mb-6 md:mb-10 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent px-2">
                        High Index
                    </h2>
                    <div className="parent w-full flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 flex-wrap">
                        <div className="box1 flex flex-col justify-between items-center bg-[#1D1D1F] w-full sm:w-[48.5%] h-[450px] p-4 rounded-md">
                            <div className="img w-full mx-auto h-[200px] mb-10">
                                <img className='w-full h-full object-cover object-center' src="/pageimg/nobgindex3.png" alt="clifflens" />
                            </div>
                            <div className="h-[200px] info flex flex-col justify-center items-center gap-4">
                                <h2 className='text-center text-white text-4xl font-bold'>{`High Index (Concave)`}</h2>
                                <p className='text-center text-gray-500 text-xl'>
                                    Much thinner edges compared to low-index, lighter, better for strong minus prescriptions.
                                </p>
                            </div>
                        </div>

                        <div className="box2 flex flex-col justify-between items-center bg-[#1D1D1F] w-full sm:w-[48.5%] h-[450px] p-4 rounded-md">
                            <div className="img w-full mx-auto h-[200px] mb-10">
                                <img className='w-full h-full object-cover object-center' src="/pageimg/nobgindex4.png" alt="clifflens" />
                            </div>
                            <div className="h-[200px] info flex flex-col justify-center items-center gap-4">
                                <h2 className='text-center text-white text-4xl font-bold '>{`High Index (Convex)`}</h2>
                                <p className='text-center text-gray-500 text-xl'>
                                    Thinner center than low-index, reduces bulge, looks more natural for strong plus prescriptions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Chart
