'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SmartAddTechnology() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the technology page
    router.push('/technology/digital-ray-path-technology');
  }, [router]);

  // Optional: Show a loading state while redirecting
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">Redirecting to technology page...</p>
      </div>
    </div>
  );
}