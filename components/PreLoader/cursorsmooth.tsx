import React from 'react';
import { SmoothCursor } from "@/components/ui/smoothcursor";

const CursorShowcase = () => {
  return (
    <div className="p-8 space-y-12">
      <div className="p-6 border rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
        <SmoothCursor />
      </div>

      <div className="p-6 border rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Custom Cursor with Settings</h2>
        <SmoothCursor
          size={30}
          color="purple"
          rotateOnMove={true}
          scaleOnClick={true}
          glowEffect={true}
        />
      </div>

      <div className="p-6 border rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Advanced Cursor with Magnetic and Trail Effects</h2>
        <div className="space-y-4" data-magnetic>
          <p className="text-gray-600">Hover over this area to see magnetic effect</p>
          <SmoothCursor
            size={25}
            color="blue"
            showTrail={true}
            trailLength={8}
            magneticDistance={60}
            magneticElements="[data-magnetic]"
            springConfig={{
              damping: 50,
              stiffness: 450,
              mass: 0.8,
              restDelta: 0.001
            }}
          />
        </div>
      </div>

      <div className="p-6 border rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Custom Cursor Element</h2>
        <SmoothCursor
          cursor={<div className="w-6 h-6 bg-red-500 rounded-full" />}
          rotateOnMove={false}
          scaleOnClick={true}
        />
      </div>
    </div>
  );
};

export default CursorShowcase;