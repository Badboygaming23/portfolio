
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10vh] left-[-10vw] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[400px] max-h-[400px] bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-[10vh] right-[-15vw] w-[35vw] h-[35vw] min-w-[250px] min-h-[250px] max-w-[450px] max-h-[450px] bg-sky-500 rounded-full filter blur-3xl opacity-15 animate-pulse"></div>
      <div className="absolute bottom-[-15vh] left-[5vw] w-[25vw] h-[25vw] min-w-[150px] min-h-[150px] max-w-[350px] max-h-[350px] bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[5vh] right-[0vw] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[400px] max-h-[400px] bg-pink-500 rounded-full filter blur-3xl opacity-15 animate-pulse"></div>
    </div>
  );
};

export default AnimatedBackground;
