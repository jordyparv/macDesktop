import React, { useEffect, useState } from 'react';

export default function Docker() {
  const [logos, setLogos] = useState([]);
  useEffect(() => {
    const appLogos = [];
    for (let i = 1; i <= 18; i++) {
      const loc = `../../assets/AppLogos/${i}.png`;
      appLogos.push(import(loc));
    }
    Promise.all(appLogos).then((data) => setLogos(data));
  }, []);
  console.log(logos);
  return (
    <div className='self-center backdrop-blur-2xl bg-black/10 border border-white/10 text-white h-auto max-w-screen w-auto flex items-center px-4 my-2  rounded-2xl relative justify-center'>
      <div className='flex gap-6 w-full items-center justify-center'>
        {logos.map((logo, idx) => (
          <img
            src={logo.default}
            key={idx}
            className='max-w-10 max-h-10 hover:scale-150 hover:-translate-y-6 rounded transition-all m-2'
          />
        ))}
      </div>
    </div>
  );
}
