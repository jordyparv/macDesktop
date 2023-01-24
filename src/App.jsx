import React from 'react';
import backgroundImg from './assets/background.jpg';
import Docker from './components/Docker';
import Header from './components/Header';
export default function App() {
  return (
    <div
      className={`w-screen h-screen flex flex-col justify-between`}
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />

      <Docker />
    </div>
  );
}
