// components/CustomBarChart.js
import { useEffect, useRef, useState } from 'react';

const CustomBarChart = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    { label: 'Jan', value: 10 },
    { label: 'Feb', value: 20 },
    { label: 'Mar', value: 30 },
    { label: 'Apr', value: 40 },
    { label: 'May', value: 50 },
    { label: 'Jun', value: 60 },
    { label: 'Jul', value: 70 },
    { label: 'Aug', value: 80 },
    { label: 'Sep', value: 90 },
    { label: 'Oct', value: 100 },
    { label: 'Nov', value: 110 },
    { label: 'Dec', value: 120 },
  ];

  const drawChart = (ctx, data, currentIndex, width, height) => {
    const barWidth = width / 4;
    const maxValue = Math.max(...data.map(d => d.value));
    
    ctx.clearRect(0, 0, width, height);
    data.slice(currentIndex, currentIndex + 4).forEach((d, i) => {
      const barHeight = (d.value / maxValue) * (height - 20);
      ctx.fillStyle = 'steelblue';
      ctx.fillRect(i * barWidth, height - barHeight, barWidth - 10, barHeight);
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.fillText(d.label, i * barWidth + barWidth / 2, height - 5);
    });
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    
    const resizeCanvas = () => {
      const container = containerRef.current;
      canvasRef.current.width = container.offsetWidth;
      canvasRef.current.height = container.offsetHeight;
      drawChart(ctx, data, currentIndex, canvasRef.current.width, canvasRef.current.height);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 4) % data.length);
    }, 2000);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [currentIndex]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    drawChart(ctx, data, currentIndex, canvasRef.current.width, canvasRef.current.height);
  }, [currentIndex]);

  return (
    <div ref={containerRef} className="w-full max-w-2xl h-64">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CustomBarChart;
