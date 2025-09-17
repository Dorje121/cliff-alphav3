import TextWithTexture from '@/components/textwithgoldentexture'
import React from 'react'

const Feature = () => {
    return (
        <>
            <section>

                <h1 className='font-ramro text-3xl sm:text-5xl font-semibold text-center my-12 mt-20  h-fit bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent'>Advanced <br />Technology & Benefits</h1>

                {/* Technology*/}
                <div className="flex lg:flex-row flex-col justify-between items-start ">

                    <div className="w-[100%] lg:w-[45%] bg-black rounded-2xl relative overflow-hidden">
                        <div className="flex justify-center relative">
                            <img
                                src="/technology.jpeg"
                                alt="Blue Safe"
                                className="rounded-lg shadow-md max-h-[600px] object-contain relative z-10"
                            />
                            {/* Gradient overlay on top */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>



                        </div>
                        <h2 className="text-4xl font-bold text-white mt-6 mb-3 text-center relative z-10">
                            Technology
                        </h2>
                        <p className="text-gray-300 text-center relative z-10  max-w-96 mx-auto">
                            Balanced Process Design, Continuum Design Technology, Wear Fit Customization, and AdaptEase Technology.
                        </p>
                    </div>


                    {/* Right side - Features in 2 columns */}
                    <div className="w-[100%]  lg:w-[55%] flex justify-center items-center  flex-wrap lg:my-auto my-12  gap-10">
                        {/* Feature */}
                        <div className="text-center ">
                            <img src="/svgs/scratchresistance.svg" alt="Scratch Resistance" className="w-20 h-20 mx-auto mb-4" />
                            <h3 className="font-bold text-xl text-white mb-2">Scratch Resistance</h3>
                            <p className="text-gray-300">Durable and long-lasting</p>
                        </div>
                        <div className="text-center">
                            <img src="/svgs/antireflective.svg" alt="Anti Reflective Coating" className="w-20 h-20 mx-auto mb-4" />
                            <h3 className="font-bold text-xl text-white mb-2">Low Reflection</h3>
                            <p className="text-gray-300">Reduces glare and reflections</p>
                        </div>
                        <div className="text-center">
                            <img src="/svgs/easytoclean.svg" alt="Easy to Clean" className="w-20 h-20 mx-auto mb-4" />
                            <h3 className="font-bold text-xl text-white mb-2">Hydrophobic</h3>
                            <p className="text-gray-300">Super Hydrophobic Coatings</p>
                        </div>
                        <div className="text-center">
                            <img src="/svgs/bluelight.svg" alt="Blue Light Filter" className="w-20 h-20 mx-auto mb-4" />
                            <h3 className="font-bold text-xl text-white mb-2">Blue Filter</h3>
                            <p className="text-gray-300">Protects eyes from screens</p>
                        </div>



                    </div>
                </div>


                {/* Benefits */}
                <div className="flex lg:flex-row flex-col-reverse justify-between items-start">
                    {/* Left side - Features in 2 columns */}

                    <div className="w-[100%]  lg:w-[55%] flex justify-center items-center  flex-wrap lg:my-auto my-12  gap-10">
                        <div className="text-center">
                            <img src="/svgs/uvprotection.svg" alt="UV Protection" className="w-20 h-20 mx-auto mb-4" />
                            <h3 className="font-bold text-xl text-white mb-2">UV Protection</h3>
                            <p className="text-gray-300">UV 400, Anti-Reflective</p>
                        </div>
                        <div className="text-center">
                            <img src="/svgs/clearvision.svg" alt="Clear Vision" className="w-20 h-20 mx-auto mb-4" />
                            <h3 className="font-bold text-xl text-white mb-2">Anti-Glare Coating</h3>
                            <p className="text-gray-300">Anti-Glare Coating Lens</p>
                        </div>


                        <div className="text-center">
                            <img src="/svgs/easytoclean.svg" alt="Durability" className="w-20 h-20 mx-auto mb-4" />
                            <h3 className="font-bold text-xl text-white mb-2">Photochromic</h3>
                            <p className="text-gray-300">shade when exposed to light</p>
                        </div>


                    </div>


                    {/* Right side - Card with blended image */}
                    <div className="w-[100%] lg:w-[45%] bg-black rounded-2xl  relative overflow-hidden flex flex-col justify-center">
                        <div className="flex justify-center relative">
                            {/* Image behind */}
                            <img
                                src="/benefits.jpeg"
                                alt="Drive Clear"
                                className="rounded-xl shadow-lg max-h-[600px] object-contain relative z-0"
                            />
                            {/* Gradient overlays */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-black/80 to-transparent z-10 rounded-xl"></div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10 rounded-xl"></div>
                        </div>
                        <h2 className="text-3xl font-bold text-white mt-6 mb-3 text-center relative z-20">
                            Benefits
                        </h2>
                        <p className="text-gray-300 text-center relative z-20">
                            Superior Vision at all distance, Ultra Clarity,Optimized Fit, Easy of Apadaption
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Feature