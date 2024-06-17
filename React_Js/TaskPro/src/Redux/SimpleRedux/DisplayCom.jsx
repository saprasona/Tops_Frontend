import React from 'react';
import { useSelector } from 'react-redux';

export default function DisplayCom() {

  let data = useSelector((store) => {
    return store.counterSlice;
  });
  console.log("----->", data);

  return (
    <div className='flex flex-col justify-center items-center m-3 w-[200px] h-[200px] border border-blue-500 bg-blue-300'>
      <div className='text-center'>
        <h1>DisplayCom</h1>
      </div>
      <h1 className='flex justify-center items-center text-pink-500 m-3'>Count is {data.count}</h1>
    </div>
  );
}
