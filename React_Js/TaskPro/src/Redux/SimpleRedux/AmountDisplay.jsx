import React from 'react'
import { useSelector } from 'react-redux'

export default function AmountDisplay() {
    let data = useSelector((store) => {
        return store.amountSlice;
    })
  return (
    <div className='flex flex-col justify-center item-center m-3 w-[200px] h-[200px] border border-blue-500 bg-blue-300'>
      <div className='text-center'>
        <h1>AmountDisplay</h1>
      </div>
      <h1 className='flex justify-center item-center m-3 text-pink-500'>Amount is {data.amount}</h1>
    </div>
  )
}
