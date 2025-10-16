"use client";
import React, { useState } from "react";
// import { useSoundStore } from "../Store/Sound";

const Loading = ({ startVideo }: { startVideo: () => void }) => {
  const [btn, setBtn] = useState(false);
  // const { play, setAudio } = useSoundStore();

  // Initialize audio source here
  // useEffect(() => {
  //   setAudio("/musicc.mp3");
  // }, [setAudio]);

  const toggleBtn = () => {
    setBtn(true);
    startVideo();
    // play();
  };

  return (
    <>
      {btn ? (
        <div className="fixed inset-0 z-[9999]">
          <video
            src="/videos/preloader.mp4"
            className="w-screen"
            autoPlay
            muted
            loop
          ></video>
        </div>
      ) : (
        <div className="h-screen w-full z-[99] bg-black flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center md:text-4xl font-serif text-white ">
            Thank <span className=" text-yellow-400">You</span> For
            Choosing <span className=" text-yellow-400">CLIFF</span> Eye
            Wear.
            <br /> Please, Enter the site to explore.
          </h1>
          <button
            onClick={toggleBtn}
            className="bg-white text-black font-semibold text-xl px-6 py-3 mx-5 scale-105 rounded-full mt-7 cursor-pointer "
          >
            Enter the Site
          </button>
        </div>
      )}
    </>
  );
};

export default Loading;
