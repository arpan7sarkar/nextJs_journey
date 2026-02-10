"use client"

import Link from "next/link"

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100)
}

const Navbar = () => {

  return (
    <div className='py-1 w-full flex justify-around items-end'>
      <Link href='/' className='p-2 bg-gray-800  rounded-md text-lg'>Home</Link>
      <Link href='/content' className='p-2 bg-gray-800  rounded-md text-lg'>Content</Link>
      <Link href="/dynamic/1" className='p-2 bg-gray-800  rounded-md text-lg'>Course</Link>
    </div>
  )
}

export default Navbar
