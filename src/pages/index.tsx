import type { NextPage } from 'next'
import Router from 'next/router'

export default function Index(){
  const handleClick = () =>{
    Router.push('/home')
  }
  return (
  <div>
    <button 
    onClick={handleClick}
    className='bg-blue-600 px-2 py-2 text-white'
    >
      run to home
    </button>
  </div>
  )
}

