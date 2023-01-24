import React from 'react';
import HeaderList from './components/HeaderList';
import IconList from '../../assets/icons';
export default function Header() {
  const links = ['File', 'Edit', 'View', 'Go', 'Window', 'Help'];
  return (
    <div className='w-screen h-auto backdrop-blur-2xl flex justify-between bg-black/10 items-center'>
      <div className=''>
        <HeaderList items={links} />
      </div>
      <div className='flex items-center mx-4'>
        <HeaderList icons={IconList} />
        <span className='text-white text-sm'>
          {
            Date()
              .toLocaleString('en-US', {
                hour: 'numeric',
                hour12: true,
              })
              .split('GMT')[0]
          }
        </span>
      </div>
    </div>
  );
}
