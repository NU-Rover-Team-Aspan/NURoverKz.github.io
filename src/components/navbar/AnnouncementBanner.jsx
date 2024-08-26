import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';


const AnnouncementBanner = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'announcement' });

  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);
  }

  return (
    <>
      {visible && <div className="z-50 relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1 bg-black">
        {/* Gradient style below */}
        <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
          <div className="aspect-[577/310] w-[60.0625rem] bg-gradient-to-r from-black to-primary opacity-30"></div>
        </div>
        <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
          <div className="aspect-[577/310] w-[60.0625rem] bg-gradient-to-l from-black to-primary opacity-30"></div>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-white">
            <strong className="font-semibold">{ t('header') }</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>
            { t('info') }
          </p>
          {/* <a target="_blank" href={import.meta.env.VITE_FORM_LINK} className="flex-none rounded-full  px-3.5 py-1 text-sm font-semibold text-primary shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
            { t('action') } <span aria-hidden="true">&rarr;</span>
          </a> */}
          <Link className="flex-none rounded-full  px-3.5 py-1 text-sm font-semibold text-primary shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900" to={`careers/#positions`}>{ t('action') } <span aria-hidden="true">&rarr;</span></Link>
        </div>
        <div className="flex flex-1 justify-end">
          <button onClick={handleDismiss} type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
            <RxCross1 className='h-5 w-5 text-white' />
          </button>
        </div>
      </div>}
    </>
  )
}

export default AnnouncementBanner