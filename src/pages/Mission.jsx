import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

import logoNU from '/assets/icons/NU.png'
import logoURC from '/assets/icons/URC.png'

const Mission = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'mission' });
  
  return (
    <div id="mission" className='w-full py-12'>
      <div className='max-w-[1240px] px-4 mx-auto grid md:grid-cols-2 gap-10'>
        <div className='grid grid-cols-2 items-center'>
          <a className='flex justify-center' target="_blank" href="https://nu.edu.kz/">
            <img className='w-64' src={logoNU} alt='Logo NU' />
          </a>
          <a className='flex justify-center' target="_blank" href="https://urc.marssociety.org/">
            <img className='w-24' src={logoURC} alt='Logo URC' />
          </a>
        </div>
        <div>
          <h1 className='md:text-4xl sm:text-3xl text-xl font-bold my-3 md:my-6'>{ t('header') }</h1>
          <Trans i18nKey='mission.para' components={{
            orange_text: <span className='text-martian' />
          }} />
        </div>
      </div>
    </div>
  )
}

export default Mission