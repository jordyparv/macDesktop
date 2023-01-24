import React from 'react';
import { AiFillApple } from 'react-icons/ai';

function ListItems({ item, Icon }) {
  return (
    <li className='text-white select-none hover:bg-white/40 px-2 py-1 rounded'>
      {item ? item : null}
      {Icon ? (
        <Icon
          size={18}
          color={'white'}
        />
      ) : null}
    </li>
  );
}
export default function HeaderList({ items, icons }) {
  return (
    <ul className='flex gap-6 text-white ml-2 items-center'>
      {icons
        ? icons.map((item, index) => (
            <ListItems
              key={index}
              Icon={item}
            />
          ))
        : null}
      {items ? (
        <>
          <AiFillApple
            size={18}
            color='white'
          />
          {items.map((item, index) => (
            <ListItems
              key={index}
              item={item}
              icon={item}
            />
          ))}
        </>
      ) : null}
    </ul>
  );
}
