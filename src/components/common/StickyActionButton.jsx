import React from 'react'
import { useTranslation } from 'react-i18next'


const StickyActionButton = ({ actionLink }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'partners.support' });

  return (
    <div className="sticky bottom-20">
      <a href={actionLink} className="absolute right-10 px-5 py-2.5 border border-martian rounded-lg bg-black hover:bg-primaryDark hover:text-white hover:border-white duration-300">
        <span className='text-sm'>{ t('action') }</span>
      </a>
    </div>
  )
}

export default StickyActionButton