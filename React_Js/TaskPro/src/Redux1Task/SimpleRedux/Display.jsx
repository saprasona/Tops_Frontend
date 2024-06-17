import React from 'react'
import { useSelector } from 'react-redux'

export default function Display() {

  let data = useSelector ((store)=>{
    return store.countSlice;
  });
  console.log("---->",data);
  return (
    <div className='flex flex-col justify-center items-center m-5 w-[400px] h-[300px] border border-blue-500'>
      < h1 className='flex justify-center items-center'>Display {data.count}</h1>
      <h1 className='text-center'>Display</h1>
    </div>
  )
}
