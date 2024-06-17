import React from 'react'
import Display from './Display'
import Increrment from './IncrermentCo'

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-full border border-black">
      <div className="flex flex-row justify-center items-center gap-3 m-9 w-full border border-black text-2xl">
      <Display/>
      <Increrment/>
    </div>
    </div>
  )
}
