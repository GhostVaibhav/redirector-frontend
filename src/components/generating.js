import React from 'react'
import { ClockLoader } from 'react-spinners'

function Generating() {
  return (
    <div className='flex bg-slate-700 text-white gap-4 items-center sm:my-4 border border-[#64748b] p-2 pr-6 rounded-full'>
      <ClockLoader loading={true} speedMultiplier={2} color='#94a3b8' />
      <div>Generating</div>
    </div>
  )
}

export default Generating;
