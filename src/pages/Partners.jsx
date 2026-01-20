import React from 'react'
import { useTranslation } from 'react-i18next'

import imgISSAI from '/assets/img/partners/ISSAI.svg'
import imgImpactFound from '/assets/img/partners/impact_foundation.png'
import imgNULogo from '/assets/img/partners/nu_logo_b.png'
import imgNuris from '/assets/img/partners/nuris_x.png'
import imgFablab from '/assets/img/partners/fablab.webp'


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
              <a className='flex justify-center' target="_blank" href="https://fund.nu.edu.kz/en/social-impact/">
                <img className='h-36' src={imgImpactFound} alt='NU Impact Foundation' />
              </a>
              <a className='flex justify-center' target="_blank" href="https://issai.nu.edu.kz/">
                <img className='h-24' src={imgISSAI} alt='NU ISSAI' />
              </a>
            </div>
            <div className='mt-8 grid md:grid-cols-3 items-center gap-6'>
              <a className='flex justify-center' target="_blank" href="https://nu.edu.kz/">
                <img className='h-36' src={imgNULogo} alt='Nazarbayev University' />
              </a>
              <a className='flex justify-center' target="_blank" href="https://www.kazzinc.com/eng">
                <img className='h-36' src={imgNuris} alt='NURIS' />
              </a>
              <div className='flex justify-center'>
                <img className='h-36' src={imgFablab} alt='FabLab' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partners