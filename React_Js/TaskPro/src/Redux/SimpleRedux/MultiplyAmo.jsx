import { Button } from 'flowbite-react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { multiplyAmount } from './redux/features/amountSlice';

export default function MultiplyAmo() {

    const dispatch = useDispatch();

  return (
    <div className='flex flex-col justify-center items-center m-3 w-[200px] h-[200px] border border-purple-500 bg-green-300'>
      <div className='text-center'>
        <h1>DecrementAmo</h1>
        <Button className='flex justify-center items-center m-3 w-[120px] bg-green-500' onClick={()=>dispatch(multiplyAmount())}>MulAmo-1</Button>
      </div>
    </div>
  )
}
