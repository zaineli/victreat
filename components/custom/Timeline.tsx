import { Lock } from 'lucide-react';
import React from 'react';


function Timeline() {
  return (
    <div className="flex items-center justify-center space-x-4 py-6">
      <div className="flex items-center space-x-2">
        <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
        <div className="h-0.5 w-10 bg-gray-300"></div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="h-0.5 w-10 bg-gray-300"></div>
        <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
      </div>
      <div className="flex items-center justify-center rounded-full bg-white p-4 shadow-md">
        <Lock className="h-4 w-4 text-gray-400" />
      </div>
      <div className="flex items-center space-x-2">
        <div className="h-0.5 w-10 bg-gray-300"></div>
        <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="h-0.5 w-10 bg-gray-300"></div>
        <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
      </div>

      
    </div>
  );
}

export default Timeline;
