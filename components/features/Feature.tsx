import React from "react";

const CheckingSavingsCard = () => (
  <div className="bg-[#1c1c1e] rounded-2xl p-8 flex flex-col justify-end min-h-[350px] relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center opacity-50">
      <div className="relative w-full h-full">
        <img src="/c6.jpeg" alt="sas" />
      </div>
    </div>
    <div className="relative z-10">
      <h1 className="text-3xl font-semibold text-white mb-2">
        Cliff Blue Safe
      </h1>
    </div>
  </div>
);

const WorkingCapitalCard = () => (
  <div className="bg-[#1c1c1e] rounded-2xl p-8 flex flex-col justify-between min-h-[350px] relative overflow-hidden">
    {/* Background graph simulation */}
    <div className="absolute inset-0 opacity-50">
      <img src="/c5.jpeg" alt="s" />
    </div>
    <div className="relative z-10 mt-auto">
      <h3 className="text-3xl font-semibold text-white mb-2">
        CLIFF PROGRESSIVE DRIVE CLEAR
      </h3>
    </div>
  </div>
);

const CorporateCardsCard = () => (
  <div className="bg-[#1c1c1e] rounded-2xl p-8 flex flex-col justify-between min-h-[350px] relative overflow-hidden">
    {/* Background graph simulation */}
    <div className="absolute inset-0  opacity-50">
      <img src="/c8.jpeg" alt="s" className="object-center" />
    </div>
    <div className="relative z-10 mt-auto">
      <h3 className="text-3xl font-semibold text-white mb-2">
        CLIFF PHOTO-Z Arrow
      </h3>
    </div>
  </div>
);
const LastCard = () => (
  <div className="bg-[#1c1c1e] rounded-2xl p-8 flex flex-col justify-between min-h-[350px] relative overflow-hidden">
    {/* Background graph simulation */}
    <div className="absolute inset-0 opacity-50">
      <img src="/c9.jpeg" alt="s" />
    </div>
    <div className="relative z-10 mt-auto">
      <h3 className="text-3xl font-semibold text-white mb-2">
        Cliff Progressive
      </h3>
    </div>
  </div>
);

// --- Main Page Component ---

const Feature = () => {
  return (
    <div className="bg-transparent min-h-screen backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center font-sans">
      <div className="w-full max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Cliff <span className="italic text-yellow-400">Lens</span> Crafted
            Just For You
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            New and expertly crafted eyewear frames of the season
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CheckingSavingsCard />
          <WorkingCapitalCard />
          <CorporateCardsCard />
          <LastCard />
        </main>
      </div>
    </div>
  );
};

export default Feature;
