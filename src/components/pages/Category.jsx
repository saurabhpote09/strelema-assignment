import React from 'react'
import Card from '../common/Card'

const Category = () => {
  return (
    <div className='mt-28'>
        <div className='font-semibold text-lg leading-[27px] text-[#5E6282] uppercase text-center'>CATEGORY</div>
        <h1 className='text-center'>We Offer Best Services</h1>
        <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-5 mt-16'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
  )
}

export default Category