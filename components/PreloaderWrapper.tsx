'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const Preloader = dynamic(() => import('@/components/Preloader'), {
  ssr: false,
});

export default function PreloaderWrapper() {
  const [isLoading, setIsLoading] = useState(true);
  const hasLoaded = useRef(false); 

  useEffect(() => {
    if (hasLoaded.current) return; 
    hasLoaded.current = true;

    document.body.classList.add('preloader-active');

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
      document.body.classList.remove('preloader-active');
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
      document.body.classList.remove('preloader-active');
    };
  }, []); 

  if (!isLoading) return null;

  return <Preloader />;
}
