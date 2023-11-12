import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { MdDone } from 'react-icons/md'
import KaspiIcon from '/assets/icons/Kaspi.svg'

const FundingModal = ({ isVisible, setIsVisible }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'partners.support' });

  useEffect(() => {
    const closeOnEscapePressed = (e) => {
      if (e.key === "Escape" || e.keyCode == 27)
        setIsVisible(false)
    };
    document.addEventListener("keydown", closeOnEscapePressed);
    return () =>
      document.removeEventListener("keydown", closeOnEscapePressed);
  }, []);

  const copyOnClick = (e) => {
    // getting the text content that we want to copy
    const content = e.target.textContent;    // loading the content into our clipboard
    navigator.clipboard.writeText(content);
  }

  return isVisible && (
    <>
      <div
        className="fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm"
      >
        <div className="mx-auto max-w-3xl translate-y-2/4 px-4">
          {/*content*/}
          <div className="w-full border border-white rounded-lg flex flex-col bg-black text-white">
            {/*header*/}
            <div className="flex justify-between px-5 py-4 border-b border-solid border-black-400 rounded-t">
              <h3 className="text-primary text-3xl font-semibold">
                {t('modalHeader')}
              </h3>
              <button
                className="ml-auto bg-transparents text-xl outline-none focus:outline-none"
                onClick={() => setIsVisible(false)}
              >
                X
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <h3 className='md:text-xl sm:text-lg font-bold'>{t('bankDetails.header')}:</h3>
              <p className='mt-1 text-sm'>{t('clickToCopy')}</p>
              <div className='grid md:grid-cols-2'>
                <ul className='my-4 font-semibold'>
                  <li>
                    <span className="mr-1">{t('bankDetails.card')}:</span>
                    <span onClick={copyOnClick}>4400 4302 9151 4500</span>
                  </li>
                  <li>
                    <span className="mr-1">{t('bankDetails.phone')}:</span>
                    <span onClick={copyOnClick}>+77077040916</span>
                  </li>
                </ul>
                <div className='flex justify-center items-center'>
                  <img src={KaspiIcon} className='h-8' />
                </div>
              </div>

              {/* <h3 className='md:text-lg font-bold mb-3'>Or donate using following methods:</h3>
              <ul className="my-4 space-y-3">
                <li>
                  <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <img src={PayPalIcon} className='h-5' />
                    <span className="flex-1 ml-3 whitespace-nowrap">PayPal</span>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default FundingModal