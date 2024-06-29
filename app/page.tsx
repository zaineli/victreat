// pages/index.tsx
'use client'
import React from 'react';
import HorizontalChart from '@/components/custom/HorizontalChart';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Horizontal Chart using React Flow</h1>
      <HorizontalChart />
    </div>
  );
};

export default HomePage;
