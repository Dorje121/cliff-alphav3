"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";

interface LandingPageProps {
  onComplete?: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onComplete }) => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [showAudioContent, setShowAudioContent] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [backgroundAudio, setBackgroundAudio] = useState<HTMLAudioElement | null>(null);
  const [mainAudio, setMainAudio] = useState<HTMLAudioElement | null>(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState<string[]>(['', '']);
  const [isMuted, setIsMuted] = useState(false);

  const lines = [
    "Welcome to Cliff — where vision meets precision.",
    "Our lenses aren't just crafted; they're engineered to protect, enhance, and redefine the way you see the world. From UV 400 protection to crystal-clear optics, every detail is designed with your eyes in mind. Experience comfort, clarity, and confidence — only with Cliff.",
   
    
  ];

  useEffect(() => {
    if (showAudioContent) {
      setCurrentLine(0);
      setDisplayedText(['', '']);
    }
  }, [showAudioContent]);

  useEffect(() => {
    if (currentLine >= 2 || !showAudioContent) return;

    const targetLine = lines[currentLine];
    let currentIndex = 0;
    
    // Different typing speeds for different lines
    const getTypingSpeed = (lineIndex: number) => {
      switch (lineIndex) {
        case 0: return 80;  
        case 1: return 60; 
        default: return 80;
      }
    };
    
    const typingSpeed = getTypingSpeed(currentLine);
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= targetLine.length) {
        const newDisplayedText = [...displayedText];
        newDisplayedText[currentLine] = targetLine.substring(0, currentIndex);
        setDisplayedText(newDisplayedText);
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentLine(currentLine + 1);
        }, 300); 
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [currentLine, showAudioContent]);

  const startBackgroundAudio = () => {
    console.log('Starting background audio...');
    
    // Try to play background audio with fallback paths
    const audioPaths = [
      '/audio/bg.mp3',
      '/music.mp3'
    ];
    
    // Try each path until one works
    for (const audioPath of audioPaths) {
      try {
        const bgAudio = new Audio(audioPath);
        bgAudio.loop = true;
        bgAudio.volume = 0.3;
        
        // Since this is called in response to user click, play() should work
        bgAudio.play().then(() => {
          console.log(`Background audio playing successfully from: ${audioPath}`);
          setBackgroundAudio(bgAudio);
        }).catch((error) => {
          console.log(`Background audio play failed for ${audioPath}:`, error);
          // Clean up if play fails
          bgAudio.pause();
          bgAudio.src = '';
        });
        
        // Break after first attempt (we'll let the promise handle success/failure)
        break;
      } catch (error) {
        console.log(`Background audio creation failed for ${audioPath}:`, error);
        // Continue to next path
      }
    }
  };

  useEffect(() => {
    // Cleanup audio when component unmounts
    return () => {
      if (backgroundAudio) {
        backgroundAudio.pause();
        backgroundAudio.currentTime = 0;
        backgroundAudio.src = '';
      }
      if (mainAudio) {
        mainAudio.pause();
        mainAudio.currentTime = 0;
        mainAudio.src = '';
      }
      // Remove all audio elements from document body (both WAV and MP3)
      const allAudioElements = document.querySelectorAll('audio');
      allAudioElements.forEach(element => {
        const audioElement = element as HTMLAudioElement;
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.src = '';
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, [backgroundAudio, mainAudio]);

  const handleSoundPreference = (enableSound: boolean) => {
    setSoundEnabled(enableSound);
    
    if (enableSound) {
      setShowWelcomeModal(false);
      
      // Start background audio first
      startBackgroundAudio();
      
      // Create and play main audio immediately in response to user click
      try {
        const audio = new Audio('/audio/audio.wav');
        audio.volume = 0.5;
        setMainAudio(audio);
        
        // Play audio immediately - this should work because it's in response to user click
        audio.play().then(() => {
          console.log('Audio playing successfully');
          setAudioPlaying(true);
          setShowAudioContent(true);
          
          audio.onended = () => {
            console.log('Audio finished, starting shutter animation');
            setIsFadingOut(true);
            handleLandingComplete();
          };
        }).catch((error: unknown) => {
          console.log('Audio play failed:', error);
          // If audio fails to play, continue with the experience
          setAudioPlaying(false);
          setShowAudioContent(true);
          setTimeout(() => {
            setIsFadingOut(true);
            handleLandingComplete();
          }, 3000); // Show content for 3 seconds then continue
        });
      } catch (audioError: unknown) {
        console.log('Audio creation failed:', audioError);
        // Continue with landing completion even if audio fails
        setShowAudioContent(true);
        setTimeout(() => {
          setIsFadingOut(true);
          handleLandingComplete();
        }, 3000);
      }
    } else {
      // User declined sound
      if (backgroundAudio) {
        backgroundAudio.pause();
        backgroundAudio.currentTime = 0;
        backgroundAudio.src = '';
      }
      if (mainAudio) {
        mainAudio.pause();
        mainAudio.currentTime = 0;
        mainAudio.src = '';
      }
      
      // Clean up any audio elements
      const allAudioElements = document.querySelectorAll('audio');
      allAudioElements.forEach(element => {
        const audioElement = element as HTMLAudioElement;
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.src = '';
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      
      setShowAudioContent(true);
      setTimeout(() => {
        setIsFadingOut(true);
        handleLandingComplete();
      }, 1000);
    }
  };

  const handleEnterSite = () => {
    setTimeout(() => {
      setIsFadingOut(true);
      handleLandingComplete();
    }, 800);
  };

  const fadeOutBackgroundAudio = () => {
    if (!backgroundAudio) return;
    
    const fadeOutDuration = 2000; // 2 seconds fade out
    const fadeOutSteps = 50; // Number of steps
    const fadeOutInterval = fadeOutDuration / fadeOutSteps;
    const volumeDecrement = backgroundAudio.volume / fadeOutSteps;
    
    let currentStep = 0;
    
    const fadeOut = () => {
      currentStep++;
      
      if (currentStep <= fadeOutSteps && backgroundAudio) {
        // Gradually decrease volume
        backgroundAudio.volume = Math.max(0, backgroundAudio.volume - volumeDecrement);
        setTimeout(fadeOut, fadeOutInterval);
      } else {
        // Fade out complete, stop audio and clean up
        if (backgroundAudio) {
          backgroundAudio.pause();
          backgroundAudio.src = '';
          setBackgroundAudio(null);
        }
      }
    };
    
    fadeOut();
  };

  const handleLandingComplete = () => {
    // Stop all audio immediately to prevent any audio from playing during transition
    if (backgroundAudio) {
      backgroundAudio.pause();
      backgroundAudio.currentTime = 0;
      backgroundAudio.src = '';
    }
    if (mainAudio) {
      mainAudio.pause();
      mainAudio.currentTime = 0;
      mainAudio.src = '';
    }
    // Remove ALL audio elements from document body (both WAV and MP3 files)
    const allAudioElements = document.querySelectorAll('audio');
    allAudioElements.forEach(element => {
      const audioElement = element as HTMLAudioElement;
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.src = '';
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
    
    // Call onComplete() immediately so hero section starts loading during shutter animation
    onComplete?.();
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden fixed inset-0 z-[999999999999999]"
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isFadingOut ? '-100vh' : 0
      }}
      transition={{ 
        duration: 2, 
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {/* Custom Cursor - hidden during shutter animation */}
      {!isFadingOut && <CustomCursor />}
      
      {/* Global cursor styling */}
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        button, a, [role="button"], .clickable {
          cursor: pointer !important;
        }
        #custom-cursor {
          pointer-events: none !important;
        }
      `}</style>
      
      <AnimatePresence>
        {showWelcomeModal && (
          <div
            className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-[999999999999999] flex items-center justify-center cursor-pointer"
          >
            
            <div
              className="relative z-10 p-8 max-w-md mx-4 text-center"
            >
              <h2 className="text-2xl font-bold mb-4">Hello, Welcome To CLIFF!</h2>
              <p className="text-gray-300 mb-6 no-wrap">Would you like to experience the website with sound?</p>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => handleSoundPreference(true)}
                  className="px-6 py-3 bg-transparent font-medium transition-colors cursor-pointer"
                >
                  Yes Please!
                </button>
                <button
                  onClick={() => handleSoundPreference(false)}
                  className="px-6 py-3 bg-transparent font-medium transition-colors cursor-pointer"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>



      {/* Audio Content - Shows when audio is playing */}
      <AnimatePresence>
        {showAudioContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 min-h-screen flex items-start justify-start pt-32 sm:pt-40 md:pt-48 pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20"
          >
            <div className="max-w-4xl mx-auto">
              {/* Cliff Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="106"
                  height="33"
                  viewBox="0 0 106 33"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M15.5938 6.19486L25.8391 16.4402C26.4047 17.0058 26.4049 17.9231 25.8391 18.4891C25.2733 19.0552 24.3558 19.0555 23.79 18.4894L14.57 9.26994L5.34606 18.4928C4.77999 19.0589 3.86243 19.0589 3.29662 18.4928C2.73055 17.9267 2.73055 17.0094 3.29662 16.4434L13.5446 6.19486C14.1104 5.62906 15.0277 5.62906 15.5935 6.19486H15.5938Z" fill="#FFD700" />
                  <path d="M29.9363 14.3917C29.3703 14.9575 28.4527 14.9575 27.8869 14.3917L17.6423 4.1471C17.0763 3.58104 17.0763 2.66347 17.6423 2.0974C18.2084 1.53133 19.126 1.53133 19.692 2.0974L29.9366 12.342C30.5027 12.908 30.5027 13.8259 29.9366 14.3917H29.9363Z" fill="#FFD700" />
                  <path d="M29.9392 20.537C30.5053 21.103 30.5053 22.0211 29.9392 22.5872L23.7875 28.7389C23.2217 29.3047 22.3044 29.3047 21.7386 28.7389L15.5908 22.5911C15.0244 22.0248 15.0244 21.1064 15.5908 20.5401C16.1571 19.9738 17.0752 19.9738 17.6415 20.5401L22.7647 25.6615L27.8895 20.537C28.4556 19.9709 29.3734 19.9706 29.9397 20.537H29.9392Z" fill="#FFD700" />
                  <path d="M15.5954 14.391C16.1609 14.9565 16.1609 15.8738 15.5951 16.4393L10.4711 21.562L15.5936 26.6844C16.1602 27.251 16.1602 28.1699 15.5936 28.7365C15.027 29.3031 14.1084 29.3031 13.5418 28.7365L7.39502 22.5898C6.83367 22.0284 6.82921 21.1208 7.38216 20.554L7.40866 20.5275L8.42275 19.5136L13.547 14.391C14.1126 13.8254 15.0296 13.8254 15.5954 14.391Z" fill="#FFD700" />
                  <path d="M45.2691 25.8995C42.957 25.8995 41.194 25.3747 39.9803 24.3249C38.7666 23.259 38.1602 21.693 38.1602 19.6265V14.3624C38.1602 12.2963 38.767 10.7381 39.9803 9.68868C41.194 8.62279 42.9567 8.08984 45.2691 8.08984C46.8761 8.08984 48.188 8.36042 49.205 8.90158C50.238 9.42631 51.058 10.2216 51.6648 11.2875L49.1803 13.0095C48.672 12.2224 48.1391 11.6566 47.5815 11.3121C47.0403 10.9677 46.2697 10.7956 45.2691 10.7956C44.0065 10.7956 43.0798 11.099 42.4894 11.7059C41.9154 12.2963 41.6284 13.1819 41.6284 14.3624V19.6265C41.6284 20.8074 41.9154 21.7008 42.4894 22.3077C43.0798 22.8981 44.0061 23.1933 45.2691 23.1933C46.3514 23.1933 47.1878 23.0131 47.7782 22.6522C48.385 22.2748 48.9262 21.6766 49.4016 20.8563L51.8615 22.6764C51.3367 23.4307 50.7956 24.0375 50.238 24.4966C49.6804 24.9556 48.9997 25.3083 48.1962 25.5542C47.4091 25.7838 46.4335 25.8987 45.2691 25.8987V25.8995ZM59.8243 25.6043C57.7254 25.6043 56.2165 25.1452 55.298 24.2267C54.3959 23.3083 53.9451 21.98 53.9451 20.242V8.38543H57.4134V20.242C57.4134 21.144 57.6104 21.8162 58.0038 22.2588C58.3971 22.685 59.004 22.8985 59.8239 22.8985H65.334V25.6043H59.8239H59.8243ZM68.0364 8.38543H71.5047V25.6043H68.0364V8.38543ZM75.0603 13.7477C75.0603 12.0093 75.5357 10.681 76.487 9.76295C77.438 8.84448 79.0044 8.38543 81.1854 8.38543H86.9414V11.0912H81.1854C80.2834 11.0912 79.6112 11.3043 79.1682 11.7309C78.742 12.1571 78.5285 12.8296 78.5285 13.7481V16.134H85.8587V18.8398H78.5285V25.6043H75.0603V13.7477ZM89.2811 13.7477C89.2811 12.0093 89.7566 10.681 90.7079 9.76295C91.6592 8.84448 93.2252 8.38543 95.4062 8.38543H101.162V11.0912H95.4062C94.5042 11.0912 93.8316 11.3043 93.389 11.7309C92.9628 12.1571 92.7493 12.8296 92.7493 13.7481V16.134H100.08V18.8398H92.7493V25.6043H89.2811V13.7477Z" fill="#FFD700" />
                </svg>
              </motion.div>
              
              {/* Sequential Typewriter Animation */}
              <div className="space-y-4 relative w-full sm:w-[44rem] h-[192px] flex-shrink-0">
                <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300">
                  {displayedText[0]}
                  {currentLine === 0 && <span className="ml-1 inline-block w-2 h-8 bg-gray-300 animate-pulse align-middle"></span>}
                </p>
                
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  {displayedText[1]}
                  {currentLine === 1 && <span className="ml-1 inline-block w-2 h-6 bg-gray-400 animate-pulse align-middle"></span>}
                </p> 
              </div>


              <div className="absolute bottom-24 sm:bottom-32 md:bottom-36 right-4 sm:right-8 md:right-12 lg:right-20 xl:right-32 2xl:right-90 flex items-center gap-3">
                  {/* Sound Icon Button */}
                  <button
                    onClick={() => {
                      console.log('Sound toggle clicked');
                      
                      if (backgroundAudio) {
                        if (backgroundAudio.paused) {
                          // Try to resume background audio
                          backgroundAudio.play().then(() => {
                            console.log('Background audio resumed');
                            setIsMuted(false);
                          }).catch((error) => {
                            console.log('Failed to resume background audio:', error);
                            // If we can't resume, try to recreate and play
                            try {
                              const newBgAudio = new Audio('/audio/bg.mp3');
                              newBgAudio.loop = true;
                              newBgAudio.volume = 0.3;
                              newBgAudio.play().then(() => {
                                setBackgroundAudio(newBgAudio);
                                setIsMuted(false);
                                console.log('Background audio restarted');
                              }).catch((err) => {
                                console.log('Failed to restart background audio:', err);
                              });
                            } catch (err) {
                              console.log('Failed to create new background audio:', err);
                            }
                          });
                        } else {
                          // Pause background audio
                          backgroundAudio.pause();
                          setIsMuted(true);
                          console.log('Background audio paused');
                        }
                      } else {
                        // No background audio exists, try to start it
                        console.log('No background audio, trying to start...');
                        startBackgroundAudio();
                        setIsMuted(false);
                      }
                    }}
                    className="flex items-center bg-white/10 backdrop-blur-xl rounded-full justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <style>{`
                      .sound-line-1,
                      .sound-line-2,
                      .sound-line-3 {
                        transform-origin: center bottom;
                        animation: soundLine 1.5s ease-in-out infinite;
                      }
                      .sound-line-1 {
                        animation-delay: 0s;
                      }
                      .sound-line-2 {
                        animation-delay: 0.2s;
                      }
                      .sound-line-3 {
                        animation-delay: 0.4s;
                      }
                      @keyframes soundLine {
                        0%, 100% {
                          transform: scaleY(1);
                          opacity: 1;
                        }
                        50% {
                          transform: scaleY(0.3);
                          opacity: 0.7;
                        }
                      }
                    `}</style>
                    {isMuted ? (
                      <svg className="w-8 h-8 sound-icon" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0.250000, 0.25000)" stroke="#e0eeee" strokeWidth="0.5" fillRule="evenodd" strokeLinecap="round">
                          <line x1="6.25" y1="2.5" x2="6.25" y2="6" />
                          <line x1="4.75" y1="1.5" x2="4.75" y2="6" />
                          <line x1="3.25" y1="3.5" x2="3.25" y2="6" />
                        </g>
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 sound-icon" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0.250000, 0.25000)" stroke="#e0eeee" strokeWidth="0.5" fillRule="evenodd" strokeLinecap="round">
                          <line x1="6.25" y1="2.5" x2="6.25" y2="6" className="sound-line-1" />
                          <line x1="4.75" y1="1.5" x2="4.75" y2="6" className="sound-line-2" />
                          <line x1="3.25" y1="3.5" x2="3.25" y2="6" className="sound-line-3" />
                        </g>
                      </svg>
                    )}
                  </button>
                  
                  {/* Skip Button */}
                  <button
                    onClick={() => {
                      console.log('Skip button clicked - stopping all audio');
                      
                      // Stop background audio
                      if (backgroundAudio) {
                        backgroundAudio.pause();
                        backgroundAudio.currentTime = 0;
                        backgroundAudio.src = '';
                        setBackgroundAudio(null);
                      }
                      
                      // Stop main audio
                      if (mainAudio) {
                        mainAudio.pause();
                        mainAudio.currentTime = 0;
                        mainAudio.src = '';
                        setMainAudio(null);
                      }
                      
                      // Clean up any remaining audio elements
                      const allAudioElements = document.querySelectorAll('audio');
                      allAudioElements.forEach(element => {
                        const audioElement = element as HTMLAudioElement;
                        audioElement.pause();
                        audioElement.currentTime = 0;
                        audioElement.src = '';
                        if (element.parentNode) {
                          element.parentNode.removeChild(element);
                        }
                      });
                      
                      // Reset audio states
                      setAudioPlaying(false);
                      setIsMuted(true);
                      
                      // Continue with the experience (same as No button)
                      setTimeout(() => {
                        setIsFadingOut(true);
                        handleLandingComplete();
                      }, 500);
                    }}
                    className="px-4 sm:px-6 py-1 bg-transparent font-medium transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    <span className="border-b border-white/50 hover:border-white pb-0.5">Skip</span>
                  </button>
                </div>
              
              
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 to-transparent"></div>
    </motion.div>
  );
};

export default LandingPage;
