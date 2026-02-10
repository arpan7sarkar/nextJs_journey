import Image from 'next/image'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <Image src="/not-found.svg" alt="404" width={400} height={400} />
        <h1>404 </h1>
    </div>
  )
}

export default NotFoundPage