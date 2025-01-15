import { TrendyolProductDetail } from '@/types/trendyol'
import React from 'react'
import ImageGallery from './imageGallery'

interface IProps{
    data:TrendyolProductDetail
}
export default function ProductDetail({data}:IProps) {
    console.log("ProductDetail ",{data})
  return (
    <div className='relative grid grid-cols-3 py-5'>
        <ImageGallery images={data.images}/>
    </div>
  )
}

 