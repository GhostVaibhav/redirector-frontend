import React from 'react'

function Generated(props) {
  return (
    <div>
      <div className='w-[90%] sm:w-fit flex justify-center bg-slate-700 m-4 p-4 rounded-xl border border-[#64748b]'>
        <div className='text-white'>
          Your URL is <a className='font-bold underline' href={props.url} target='_blank' rel="noreferrer">{props.url}</a>
        </div>
      </div>
    </div>
  )
}

export default Generated;
