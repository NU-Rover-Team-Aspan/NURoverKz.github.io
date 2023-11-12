import React from 'react'

import { useTranslation } from 'react-i18next'


const About = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });

  return (
    <div id="about" className='w-full bg-[#00850b] py-24'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <h1 className='md:text-4xl sm:text-3xl text-xl font-bold mb-4'>{ t('header') }</h1>
        <p className='font-medium'>{ t('para') }</p>
      </div>
    </div>
  )
}

export default About