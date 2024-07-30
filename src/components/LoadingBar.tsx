import React, { useEffect, useState } from "react";

const LoadingBar: React.FC = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress === 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 40);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="z-[1200]">
      <div
        style={{
          width: `${loadingProgress}%`,
          height: "20px",
          backgroundColor: "white",
        }}
      />
      <p className="text-white mx-auto">{loadingProgress}%</p>
    </div>
  );
};

export default LoadingBar;
