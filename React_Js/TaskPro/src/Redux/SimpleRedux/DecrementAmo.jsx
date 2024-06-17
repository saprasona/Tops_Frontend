import { Button } from 'flowbite-react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementAmount } from './redux/features/amountSlice';

export default function DecrementAmo() {
    const dispatch = useDispatch();
  return (
    <div className='flex flex-col justify-center items-center m-3 w-[200px] h-[200px] border border-purple-500 bg-purple-300'>
      <div className='text-center'>
        <h1>DecrementAmo</h1>
        <Button className='flex justify-center items-center m-3 w-[120px] bg-purple-500' onClick={()=>dispatch(decrementAmount())}>DecAmo-1</Button>
      </div>
    </div>
  )
}
