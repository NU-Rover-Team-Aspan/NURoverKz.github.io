import React, { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next';
import CopyButton from 'src/components/common/CopyButton';
import KaspiIcon from '/assets/icons/Kaspi.svg'
import { Transition } from '@headlessui/react';

const Support = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'partners.support' });

  const [formVisible, setFormVisible] = useState(false);

  const transitionClasses = {
    enter: 'transform transition ease-in-out duration-500 sm:duration-700',
    enterFrom: 'translate-x-full opacity-0',
    enterTo: 'translate-x-0 opacity-100',
    leave: 'transform transition ease-in-out duration-300 sm:duration-500',
    leaveFrom: 'translate-x-0 opacity-100',
    leaveTo: 'translate-x-full opacity-0',
  };

  return (
    <div id="support" className="w-full pt-10 pb-20">
      <div className='max-w-[1240px] px-4 mx-auto grid text-center'>
        <div className='flex justify-center relative'>
          <Transition className="absolute w-5/7 bg-black" show={formVisible} {...transitionClasses}>
            <h1 className='text-center sm:text-4xl text-3xl font-bold my-4 md:my-8 text-primary'>
              {t('form.header')}
            </h1>
            <div className='grid sm:grid-cols-2 justify-center mt-4'>
              <div className='font-semibold text-left'>
                <h3 className='text-base sm:text-lg font-bold'>{t('form.bankHeader')}:</h3>
                <ul className='text-sm md:text-base mt-4'>
                  <li className='flex items-center'>
                    <span>{t('form.card')}:</span>
                    <span className='mx-1'>{import.meta.env.VITE_BANK_CARD}</span>
                    <CopyButton content={import.meta.env.VITE_BANK_CARD} />
                  </li>
                  <li className='flex items-center mt-2'>
                    <span>{t('form.phone')}:</span>
                    <span className='mx-2'>{import.meta.env.VITE_CONTACT_PHONE}</span>
                    <CopyButton content={import.meta.env.VITE_CONTACT_PHONE} />
                  </li>
                </ul>
              </div>
              <div className='flex justify-center items-center pt-10 sm:pt-0 flex-col font-semibold'>
                <img src={KaspiIcon} className='h-10' />
                {/* <h3 className='md:text-2xl sm:text-xl font-bold'>Or use following methods:</h3>
              <ul className="my-2">
                <li>
                  <a href="#" className="flex items-center p-3 font-bold rounded-lg border hover:border-primary">
                    <img src={PayPalIcon} className='h-5' />
                    <span className="flex-1 ml-3">PayPal</span>
                  </a>
                </li>
              </ul> */}
              </div>
            </div>
            <div className='mt-10 text-center'>
              <button type="button" onClick={() => setFormVisible(!formVisible)}
                className="px-5 py-2.5 bg-primaryDark transition ease-in duration-200 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 hover:ring-2 hover:ring-offset-2 rounded-lg">
                {t('form.action')}
              </button>
            </div>
          </Transition>
          <div className="md:w-7/12" >
            <div className={formVisible ? 'invisible' : 'visible'}>
              <h1 className='sm:text-4xl text-3xl font-bold my-3 md:my-6 text-primary'>
                {t('header')}
              </h1>
              <p className="md:text-xl font-medium mt-4">
                <Trans i18nKey='partners.support.para' components={{
                  orange_text: <span className='text-martian' />
                }} />
              </p>
              <div className="mt-8">
                <button type="button" onClick={() => setFormVisible(!formVisible)}
                  className="px-5 py-2.5 bg-martian transition ease-in duration-200 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 hover:ring-2 hover:ring-offset-2 rounded-lg">
                  {t('action')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support