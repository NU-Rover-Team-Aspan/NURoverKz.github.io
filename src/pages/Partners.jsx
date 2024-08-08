import React from 'react'
import { useTranslation } from 'react-i18next'

import imgISSAI from '/assets/img/partners/ISSAI.svg'
import imgSEDS from '/assets/img/partners/NU_SEDS.png'
import imgNURIS from '/assets/img/partners/NURIS.png'
import imgFablab from '/assets/img/partners/Fablab.png'
import imgInstitute from '/assets/img/partners/InstOfBatteries.png'


const Partners = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'partners' });

  return (
    <>
      <div id="partners" className='w-full py-24'>
        <div className='max-w-[1240px] px-4 mx-auto grid md:grid-cols-3 gap-8'>
          <div className='flex items-center justify-center'>
            <h1 className='text-primary text-center lg:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>{t('header')}</h1>
          </div>
          <div className='md:col-span-2'>
            <div className='grid md:grid-cols-3 items-center gap-6'>
              <a className='flex justify-center' target="_blank" href="http://seds.nu.edu.kz/">
                <img className='h-36' src={imgSEDS} alt='NU SEDS' />
              </a>
              <a className='flex justify-center' target="_blank" href="https://issai.nu.edu.kz/">
                <img className='h-24' src={imgISSAI} alt='NU ISSAI' />
              </a>
              <a className='flex justify-center' target="_blank" href="https://nuris.nu.edu.kz/">
                <img className='h-36' src={imgNURIS} alt='NURIS' />
              </a>
            </div>
            <div className='mt-8 grid md:grid-cols-2 items-center gap-6'>
              <a className='flex justify-center' target="_blank" href="https://nuris.nu.edu.kz/fablab">
                <img className='h-36 bg-white' src={imgFablab} alt='NU Fablab' />
              </a>
              <a className='flex justify-center' target="_blank" href="https://batterykazakhstan.com/">
                <img className='h-36' src={imgInstitute} alt='Institute of Batteries KZ' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partners