import React from 'react'

const layout = ({feed, stats}:any) => {
  return (
    <div className='flex gap-10'>
        <div className='flex-1'>{feed}</div>
        <div className='flex-2'>{stats}</div>
    </div>
  )
}

export default layout