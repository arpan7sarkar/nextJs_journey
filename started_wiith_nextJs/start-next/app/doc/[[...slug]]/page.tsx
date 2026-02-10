import React from 'react'

const Doc = async ({ params }: any) => {
  const { slug } = await params
  return (
    <div>
      {/* This code will display the slug/route */}
      Docs Page
      {slug && <div>{slug.join('/')}</div>}
    </div>
  )
}

export default Doc
