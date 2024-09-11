import Image from 'next/image'
import React from 'react'
import testimage from '../../public/images/image.png'

const LearnUseImage = () => {
  return (
    <>
      <Image src={testimage} alt='This is an test image' />
    </>
  )
}

export default LearnUseImage