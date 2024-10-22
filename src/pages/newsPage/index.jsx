import React from 'react'
import MyCard from '../../components/card'
function NewsPage() {
  return (
    <div>
    <h1 className='flex justify-center items-center p-4 font-semibold'>News Page</h1>
    <div className='flex flex-row flex-wrap justify-center items-center m-8 gap-4'>
      <MyCard/>
    </div>
  </div>
  )
}

export default NewsPage
