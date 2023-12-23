import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Chart from 'chart.js';

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

let seed = 0;
const customRandom = () => {
  const a = 2664525;
  const c = 1013904223;
  seed = (a * seed + c) & 0x7fffffff;
  return (seed % (NUMBER_CFG.max - NUMBER_CFG.min + 1)) + NUMBER_CFG.min;
};

const getMonthLabels = () => {
  const currentDate = new Date();
  return Array.from({ length: DATA_COUNT }, (_, index) => {
    const month = (currentDate.getMonth() + index) % 12;
    return new Date(currentDate.getFullYear(), month, 1).toLocaleString('en-us', { month: 'short' });
  });
};

const data = {
  labels: getMonthLabels(),
  datasets: [
    {
      label: 'Dataset 1',
      data: Array.from({ length: DATA_COUNT }, () => customRandom()),
      fill: false,
      borderColor: '#001f3f',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
    },
  ],
};

const ChartComponent = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: data,
      });
      setChartInstance(myChart);

      // Clean up when the component is unmounted
      return () => {
        myChart.destroy();
      };
    }
  }, []); // Empty dependency array ensures that the effect runs only once

  useLayoutEffect(() => {
    const updateSize = () => {
      if (chartInstance) {
        chartInstance.resize();
      }
    };

    // Update size on initial render
    updateSize();

    // Update size on window resize
    window.addEventListener('resize', updateSize);

    // Clean up event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, [chartInstance]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
