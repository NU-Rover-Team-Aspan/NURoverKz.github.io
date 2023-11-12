import React, { useEffect, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next';
import FundingModal from 'src/components/common/FundingModal';

const Support = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'partners.support' });

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (document) {
      document.body.style.overflow = modalVisible ? 'hidden' : 'auto'

    }
  }, [modalVisible])

  return (
    <>
      <div id="support">
        <div className='max-w-[1240px] px-4 mx-auto flex justify-center'>
          <div className="md:w-7/12 text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h1 className='sm:text-4xl text-3xl font-bold my-3 md:my-6 text-primary'>
              {t('header')}
            </h1>
            <p className="md:text-xl font-medium mt-4">
              <Trans i18nKey='partners.support.para' components={{
                orange_text: <span className='text-martian' />
              }} />
            </p>
            <div className="mt-8">
              <button type="button" onClick={() => setModalVisible(!modalVisible)}
                className="px-5 py-2.5 bg-martian transition ease-in duration-200 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                {t('action')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <FundingModal isVisible={modalVisible} setIsVisible={setModalVisible} />
    </>
  )
}

export default Support