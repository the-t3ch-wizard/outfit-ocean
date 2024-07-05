import React from 'react'

export default function HeroSection() {

  const HeroSectionImages = [{
    imageUrl: 'images/heroSectionBlackFridayDesktop.webp',
    imageUrlMobile: 'images/heroSectionBlackFriday.webp',
    label: 'Black Friday Sale',
  }]

  return (
    <div className='min-h-96 w-full'>
      
      <div className='hidden sm:block w-full'>
        {HeroSectionImages.map((image) => (<div className='w-full'>
          <img 
            src={image.imageUrl}
            alt={image.label}
            className='w-full'
          />
        </div>))}
      </div>

      <div className='sm:hidden'>
        {HeroSectionImages.map((image) => (<div>
          <img 
            src={image.imageUrlMobile}
            alt={image.label}
            className='w-full'
          />
        </div>))}
      </div>

    </div>
  )
}
